const { default: mongoose } = require('mongoose');
const monggose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecom');
const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
const  main=async()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({
        name:"m8",
        brand:'xyz',
        category:'mobile',
        price:1000
    });
    let result = await data.save();
    console.log(result)
    
}
const updateInDB = async()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.updateOne(
        {name:'m8'},
        {$set:{price:999,name:'m88'}}
    )
    console.log(data)
}
const deleteInDB = async()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.deleteOne(
        {name:'m8'},
       
    )
    console.log(data)
}
const findInDB = async()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = await ProductModel.find(
        // {name:'m8'},
       
    )
    console.log(data)
}
// main()
// updateInDB();
// deleteInDB()
findInDB()