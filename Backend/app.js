const express = require("express");
const app = express();
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, key, Content-Type, Accept, access-control-allow-origin, Authorization, userid");
  next();
});
var cors = require("cors");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connect = require("./connection/config");
const api = require("./routes/routes")
require("dotenv").config();
let path =require("path");
connect();


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api",api);

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(express.static(path.join(__dirname,"public")));
app.get("*", (req, res, next) => {
res.sendFile(path.join(__dirname+"/public"+"/index.html"));
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

var port = process.env.PORT || 7000;


app.listen(port, () => {
  console.log(`Server is listening in port: ${port}`);
});
