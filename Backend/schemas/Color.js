const mongoose = require("mongoose");

const colorSchema = mongoose.Schema(
    {
        colorcode:{
            type: String,
            required: true
        },
        createdby: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

module.exports = colorSchema;