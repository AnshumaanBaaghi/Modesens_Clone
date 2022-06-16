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

// modesensRouter.get("/beauty",async(req,res)=>{
//     const beautyData=await Beauty.find()
//     return res.json(beautyData)
// })
modesensRouter.get("/beauty/:id",async(req,res)=>{
    const {id}=req.params
    // const beautyData=await Beauty.find(params)
    const newsData=await Beauty.find({_id:id})
    return res.json(newsData)
})

modesensRouter.get("/beauty",async(req,res)=>{
    const {page_no}=req.query
    const params=req.query
    // if(page_no){
    //     const Beautydata=await Beauty.find().skip((page_no-1)*10).limit(20)
    //     return res.json(Beautydata)
    // }
    if(params){
        console.log(params);
        const Data=await Beauty.find(req.query)
        return res.json(Data)
    }
    const beautyData=await Beauty.find()
    return res.json(beautyData)
   
    
})


module.exports=modesensRouter