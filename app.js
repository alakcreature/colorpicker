const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const connectdb = require("./connection/config");
require("dotenv").config();
const hbs = require("express-handlebars");
connectdb();
const Color = require("./schemas/Color");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.engine('hbs', hbs({extname: "hbs", defaultLayout: "main", layoutsDir: __dirname+"/views/layouts" }));
app.set('view engine', 'hbs')
app.use(express.static('public'));

app.get("/",(req,res)=>{
    let colors =[];
    Color.find().select(' -_id colorcode')
    .then((result)=>{
        result.map(color=>{
            colors.push(color.colorcode);
        })
        // console.log(colors);
        res.render('index',{style: 'index.css',array: colors});
    }).catch(err=>{
        console.log(err);
        res.json({
            status:false,
            message:"Server Error"
        })
    })
})

app.post("/api/savecolor",(req,res,next)=>{
    console.log(req.body.colorcode[0]);
    if(req.body.colorcode[0]!=='#'){
        req.body.colorcode= `#${req.body.colorcode}`
    }
    console.log(req.body.colorcode)
    const color = new Color({
        colorcode: req.body.colorcode
    });
    color.save()
    .then((result)=>{
        res.redirect("/")
    })
    .catch(err=>{
        console.log(err);
        res.json({
            status: false,
            message:'Server Error'
        })
    })
})

app.get('/favicon.ico', (req, res) => res.status(204));

app.use((req,res,next)=>{
    const error =  new Error("Api not found");
    error.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    })
})

const port = process.env.PORT || 7000;
app.listen(port,()=>console.log(`Server started at ${port}`))