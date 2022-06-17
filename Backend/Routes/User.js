const {Router}=require("express")
const { Kids,Beauty, Cart} =require("../model/user")

const modesensRouter=Router()
// ...Kids route data............................//
modesensRouter.post("/kids",async(req,res)=>{
    const Data= await new Kids({...req.body})
    Data.save((err,success)=>{
        res.send(" Data has been recieved")
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
        res.send(" Data has been recieved")
    })
})

modesensRouter.get("/beauty/:id",async(req,res)=>{
    const {id}=req.params
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

// cart.............
modesensRouter.post("/cart",async(req,res)=>{
    const Data= await new Cart({...req.body})
    Data.save((err,success)=>{
        res.send(" product added succesfully")
    })
})


modesensRouter.get("/cart",async(req,res)=>{
    const cartData=await Cart.find()
    return res.json(cartData)
})


module.exports=modesensRouter