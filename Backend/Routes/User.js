const {Router}=require("express")
const { Kids,Beauty } =require("../model/user")

const modesensRouter=Router()
// ...Kids route data............................//
modesensRouter.post("/kids",async(req,res)=>{
    const Data= await new Kids({...req.body})
    Data.save((err,success)=>{
        res.send("news Data has been recieved")
    })
})

modesensRouter.get("/kids",async(req,res)=>{
    const kidsData=await Kids.find()
    return res.json(kidsData)
})

// Beauty route Data.........................//
modesensRouter.post("/beauty",async(req,res)=>{
    const Data= await new Beauty({...req.body})
    Data.save((err,success)=>{
        res.send("news Data has been recieved")
    })
})

modesensRouter.get("/beauty",async(req,res)=>{
    const beautyData=await Beauty.find()
    return res.json(beautyData)
})


module.exports=modesensRouter