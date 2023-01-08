const dbConnect = require('./mongodb');

const deleteData = async()=>{
    const data = dbConnect();
    const result = await (await data).deleteOne({name:'m4052'})
    console.log(result)
}

deleteData();