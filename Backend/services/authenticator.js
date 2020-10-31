const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_KEY = "secret";
require("dotenv").config();

module.exports.isAuthenticated = (req, res, next) => {
  // console.log(req.headers.authorization);
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token)
  jwt.verify(token, process.env.jwt, function(err, decoded) {
    if (err) {
      console.log(err);
      res.json({
        status: false,
        message: "Invalid token"
      });
    } else {
      User.findById(decoded.userId)
        .select("-password")
        .then(result => {
          req.user = result;
          next();
        })
        .catch(err => {
          res.json({
            status: false,
            message: "Invalid token"
          });
        });
    }
  });
};
