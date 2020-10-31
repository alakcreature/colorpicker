const mongoose = require("mongoose");
const colorSchema = require("../schemas/Color");

let Color = mongoose.model('color',colorSchema);

module.exports =  Color;