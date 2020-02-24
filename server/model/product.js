const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    coverImg: String,
    name: {type: String, required: true, max: [60, "最大60文字まで!"]},
    price: Number,
    description: String,
    heading1:String,
    heading2:String,
    heading3:String,
    headingtext1:String,
    headingtext2:String,
    headingtext3:String
}) 

module.exports = mongoose.model("Product", ProductSchema);