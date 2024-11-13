import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

mongoose.connect("mongodb+srv://rivin:rivin1234@cluster0.48fyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
});

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
  };

app.use(cors(corsOptions));

app.listen(3000 ,() =>{
    console.log('Server Listning on port 3000')
});






app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    });
})