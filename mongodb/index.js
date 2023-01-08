//1. connect mongodb database
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);
const database = 'ecom'

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let responce = await collection.find({}).toArray()
//     console.log(responce)
// }

// getData();

//2. read data from MongoDB
// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
   
// }

// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })


const dbConnect = require('./mongodb')
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();