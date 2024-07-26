import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async()=>{
try {
    await mongoose.connect(process.env.DATABASE);
    console.log("connected to database");
    
} catch (error) {
    console.log(error);
    
}
}

app.use("/api/user",userRoute)

app.listen(8800,()=>{
    connect();
    console.log('Server is running on port 8800');
})
