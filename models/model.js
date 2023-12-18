import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    weight:{
        type:String
    }, 
})

const productModel = new mongoose.model('Spider_Man', productSchema);

export default productModel;