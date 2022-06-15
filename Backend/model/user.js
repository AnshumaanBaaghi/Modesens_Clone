const {Schema, model}=require("mongoose")

const modesensSchema=new Schema({
    url:String,
    name:String,
    line:Date,
    price:Number,
    stores:Number
})
const Kids=model("Kids",modesensSchema)
const Beauty=model("beauties",modesensSchema)
module.exports={Kids, Beauty};
