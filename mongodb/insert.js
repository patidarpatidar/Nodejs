const dbConnect = require('./mongodb');

const insert = async()=>{
    const db = await dbConnect();  
    const result = await db.insert([
        {name:'m405',brand:'mobile',price:'9999'},
        {name:'m406',brand:'mobile1',price:'9999'},
        {name:'m407',brand:'mobile2',price:'9999'}
    ]
    )  
    console.log(result)
}

insert();