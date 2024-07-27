import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';
import orderRoute from './routes/order.route.js';
import messageRoute from './routes/message.route.js';
import gigRoute from './routes/gig.route.js';
import reviewRoute from './routes/review.route.js';
import conversationRoute from './routes/conversation.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("connected to database");

    } catch (error) {
        console.log(error);

    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cros({origin: 'http://localhost:5173',credential:true}));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.use("/api/orders", orderRoute);

app.use("/api/messages", messageRoute);

app.use("/api/gigs", gigRoute);

app.use("/api/reviews", reviewRoute);

app.use("/api/conversations", conversationRoute);

app.use((err,req,res,next) =>{
    const errorStatus = err.status ||  500
    const errorMessage = err.message || "sometghin went wrong";

    return res.status(errorStatus).send(errorMessage);
});



app.listen(8000, () => {
    connect();
    console.log('Server is running on port 8800');
})
