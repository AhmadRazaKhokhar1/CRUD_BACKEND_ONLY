import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routes/route.js';
dotenv.config();
import mongoose from 'mongoose';

const port = process.env.PORT;
const uri = process.env.MONGO_URI;

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use('/api', productRouter)


mongoose.connect(uri);
mongoose.connection.on('connected', ()=>{
    console.log(`DB is Connected!`);
})
mongoose.connection.on('disconnected', ()=>{
    console.log(`DB is terminated!`);
});

app.listen(port, ()=>{
    console.log(`The server is live at the port: ${port}`)
})