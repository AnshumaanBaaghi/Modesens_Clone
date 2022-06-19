const {Router}=require("express")
const {connection,News}=require("../mongoDb")

const newsRouter=Router()

newsRouter.post("/new",async(req,res)=>{
    const news= await new News({...req.body})
    news.save((err,success)=>{
        res.send("news Data has been recieved")
    })
})

newsRouter.get("/get",async(req,res)=>{
    const {page_no}=req.query
    const params=req.query
    console.log(params.location)
    if(page_no){
        const newsData=await News.find().skip((page_no-1)*10).limit(10)
        return res.json(newsData)
    }

    else if(params){
        const data= await News.find(params)
        return res.json(data)
    }
    else if(params.tags){
        const newsData=await News.find({tags:[params.tags]})
        return res.json(newsData)
    }
    else if(params.title){
        const newsData=await News.find({title:params.title})
        return res.json(newsData)
    }
    

    const data= await News.find()
    return res.json(data)
})

newsRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    await News.findByIdAndUpdate(id, req.body);
    res.status(200).send({ message: "News Updated" });
  });

newsRouter.get("/get/:id",async(req,res)=>{
    
    const {id}=req.params
    const newsData=await News.find({_id:id})
    const data=await News.update({total_views:0,_id:id},{$inc:{total_views:1}})
    
    return res.json(newsData)
})
module.exports=newsRouter