const { default: mongoose } = require('mongoose');
const monggose = require('mongoose');

const  main=async()=>{
    await mongoose.connect('mongodb://localhost:27017/ecom');
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({
        name:"m8",
        price:1000
    });
    let result = await data.save();
    console.log(result)
    
}

main()