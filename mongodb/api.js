const express = require('express');
const { MongoDBNamespace } = require('mongodb');

const dbConnect = require('./mongodb');
const app = express();

app.get('/', async(req,res)=>{
    let data = await dbConnect()
    data = await data.find().toArray();
    res.send({name:data});
})

app.use(express.json())    //use this function set data postman to mongodb database
app.post('/',async (req,res)=>{
    // console.log(req.body)
    // res.send({name:'rajmal'})
    let data = await dbConnect();
    let result = await data.insert(req.body);
    console.log(result)
})

app.put('/',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'cover'},
        {$set:{price:req.body.price}}
    )
    console.log(result)
})
app.delete('/:name',async(req,res)=>{
    let data = await dbConnect();
    // let result = await data.deleteOne({name:req.params.name})
    let result = await data.deleteOne({id: req.params.id})
    console.log(result)
})

app.listen(4500)