const express=require("express");
const connection = require("./mongoDb")
const modesensRouter=require("./Routes/User")
const app= express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/modesens",modesensRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to do");
    } catch (error) {
        console.log("err",error);
    }
})

