const mongoose = require("mongoose");
const userSchema = require("../schemas/User");

let User = mongoose.model('user',userSchema);

module.exports =  User;