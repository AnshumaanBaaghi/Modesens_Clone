const express=require('express')
const { connection, News } =require("./mongoDb")
const newsRouter=require("./Routes/news")
const cors=require("cors")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use("/news",newsRouter)
app.use("/news",newsRouter)
app.use("/news",newsRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log("Failed to connect db");
    }
})