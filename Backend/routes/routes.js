const router = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Color = require("../models/Color");
const JWT_KEY = process.env.jwt;
const mongoose = require("mongoose");
const { isAuthenticated } = require("../services/authenticator");
const {body, oneOf, query} = require("express-validator");
const {errorHandler}  = require("../services/error");


// router.get("/",(req,res)=>{
//     res.send("hi");
// })

// ++++++++++++++++++++++++++ User Creation ++++++++++++++++++++++++ 
router.post("/signup",[
  body("email").not().isEmpty(),
  body("username").not().isEmpty(),
  body('password').not().isEmpty()
],errorHandler, (req, res, next) => {
    // console.log(req.body);
    User.find({ email: req.body.email }).then(user => {
      // console.log(user);
      if (user.length >= 1) {
        return res.json({
          status: false,
          message: "Email already exists"
        });
      }else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            res.json({
              status: false,
              message: "Server error"
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.username,
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.json({
                  status: true,
                  message: "User Created"
                });
              })
              .catch(err => {
                res.json({
                  status: false,
                  message: "Server error"
                });
              });
          }
        });
      }
    });
  });

  
// ++++++++++++++++++++++++++ User Login +++++++++++++++++++++++++++
router.post("/login",[
  body("email").isEmail(),
  body('password').isLength({ min: 1 }).withMessage('Password must be at least 5 chars long.')
],errorHandler, (req, res, next) => {
  console.log(req.body);
  User.find({ email: req.body.email })
    .then(user => {
      if (user.length < 1) {
        res.json({
          status: false,
          message: "Invalid Email id"
        });
      } else {
        bcrypt.compare(req.body.password, user[0].password, (error, result) => {
          if (error) {
            return res.json({
              status: false,
              message: "Invalid Password"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                //generates token
                userId: user[0]._id
              },
              JWT_KEY,
              {
                expiresIn: "24h"
              }
            );
            return res.json({
              status: true,
              message: "Successfully loged in",
              token: token
            });
          }
          res.json({
            status: false,
            message: "Auth failed"
          });
        });
      }
    })
    .catch(err => {
      res.json({
        status: false,
        message: "Server error"
      });
    });
});


// ++++++++++++++++++++++++++ Get User Saved Colors +++++++++++++++++++++++++++
router.get("/fetchcolors",isAuthenticated,(req,res)=>{
  console.log(req.user);  
  Color.find({createdby: req.user._id}).sort({date: -1}).select(' -_id colorcode').limit(10)
    .then((result)=>{
        // console.log(result);
        res.json({
            status:true,
            data: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.json({
            status:false,
            message: "Server Error"
        })
    });
})

// ++++++++++++++++++++++++++ Save Color for User +++++++++++++++++++++++++++
router.post("/savecolor",isAuthenticated,(req,res)=>{
    if(req.body.colorcode[0]!=='#'){
        req.body.colorcode = `#${req.body.colorcode}`;
    }
    // console.log(req.body.colorcode);
    const color = new Color({
        colorcode: req.body.colorcode,
        createdby: req.user._id
    })
    color.save()
    .then((result)=>{
        res.json({
            status:true,
            message: "Color Saved."
        })
    })
    .catch(err=>{
        console.log(err);
        res.json({
            status: false,
            message:'Server Error'
        })
    })
})

// ++++++++++++++++++++++++++ Delete Color +++++++++++++++++++++++++++
router.post("/deletecolor",isAuthenticated,(req,res)=>{
    Color.deleteOne({colorcode: req.body.colorcode})
    .then(result=>{
        res.json({
            status: true,
            message: "Code Deleted"
        })
    })
    .catch((err)=>{
      console.log(err);
      res.json({
          status: false,
          message: "Server Error"
      })
  })
})


// ++++++++++++++++++++++++++ Get random 10 Colors +++++++++++++++++++++++++++
router.get("/fetchrandomcolors",(req,res)=>{
    Color.find().sort({date: -1}).select(' -_id colorcode').limit(10)
    .then((result)=>{
        // console.log(result);
        res.json({
            status: true,
            data: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.json({
            status:false,
            message: "Server Error"
        })
    });
})

module.exports = router;