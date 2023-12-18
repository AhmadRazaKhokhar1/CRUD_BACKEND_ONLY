import productController from "../controllers/controller.js";
import express from 'express';

const productRouter = express.Router();

productRouter.post('/product', productController.upload);
productRouter.get('/product', productController.getProduct);
productRouter.get('/product/:id', productController.getById);
productRouter.delete('/product/:id', productController.deleteById);
productRouter.put('/product/:id', productController.updateById);


export default productRouter;