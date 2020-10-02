const mongoose = require("mongoose");

const colorSchema = mongoose.Schema(
    {
        colorcode:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Color', colorSchema);