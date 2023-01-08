const dbConnect = require('./mongodb');

const update = async()=>{
    let data = await dbConnect();
    let result = await data.update({name:'m4051'},{$set:{name:'m4052'}})
    console.log(result)
}

update();