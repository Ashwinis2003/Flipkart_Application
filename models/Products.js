const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number
        },
        count:{
            type:Number
        }
        }     
})

const Products = mongoose.model('Product', productSchema);
module.exports=Products;