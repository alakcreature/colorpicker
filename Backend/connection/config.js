const mongoose = require("mongoose");

const connectdb = async ()=>{
    await mongoose.connect(process.env.test_uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log("db connected");
}
module.exports = connectdb;