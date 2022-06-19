const mongoose=require("mongoose")
const connection = mongoose.connect("mongodb://localhost:27017/unit-5-c4")

const newsSchema=new mongoose.Schema({
    title:String,
    description:String,
    date:Date,
    author:String,
    location:String,
    tags:{type:[String]},
    total_views:Number,
    category:{type:[String]},
})
const News=new mongoose.model("news",newsSchema)

module.exports={connection,News}