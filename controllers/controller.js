import productModel from "../models/model.js";

const productController =  {
  upload:async(req, res)=>{
    try{

        const newProduct = new productModel({
            title:req.body.title,
            price:req.body.price,
            weight:req.body.weight,
        });
        
        let result = await newProduct.save();
        res.status(201).send({
            sucess:true,
            mesg:'product is created',
            result
        });
        
    }catch(error){
        res.status(500).send({
            success:false,
            msg:'There was an internal server error!'
        })
        console.log(`upload error: ${error}`);
    }
},
getProduct:async(req, res)=>{
    try {
        const data = await productModel.find({});
        res.status(200).send({
            success:true,
            msg:'fetched successfully!',
            data:data
        })
    } catch (error) {
        console.log(`Error in get Product: ${error}`)
        res.status(500).send({
            success:false,
            msg:'There was an internal server error!'
        })
    }
},
// get by id:
getById:async(req, res)=>{
    try {
        const id = req.params.id;
        const user = await productModel.findOne({_id:id});
        res.status(200).send({
            success:true,
            msg:'User fetched successfully!',
            user:user,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            msg:'There was an internal server error!'
        });
        console.log(`There was an error in getById : ${error}`);
    }
},
//delete by id:
deleteById:async(req, res)=>{
    try {
        const id = req.params.id;
        const user = await productModel.findOneAndDelete({_id:id});
        if(user){
            res.status(200).send({
                success:true,
                msg:"User deleted successfully!"
            })
        }else{
            res.status(404).send({
                success:false,
                msg:'User not Found!'
            })
        }
    } catch (error) {
        res.status(500).send({
            success:false,
            msg:'There was an internal server error!'
        });
        console.log(`There was an error in deleteById : ${error}`);
    }
},
//update by id:
updateById:async(req, res)=>{
    try {
        const id = req.params.id;
        const user = await productModel.findOneAndUpdate({_id:id}, {$set:req.body}, {new:true});
        if(user){
            res.status(200).send({
                success:true,
                msg:"User updated successfully!",
                user:user,
            })
        }else{
            res.status(404).send({
                success:false,
                msg:"User not Found!"
            })
        }
    } catch (error) {
        res.status(500).send({
            success:false,
            msg:"There was an internal server error!"
        })
    }
}
}

export default productController;
