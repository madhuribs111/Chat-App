import express from "express";
import dotenv from "dotenv";
import indexRouter from "././routes/index.route.js"
import connectToMongoDB from "../backend/db/connectToMongoDB.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import {app, server} from "./socket/socket.js"

dotenv.config()
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors({
    origin: 'https://chat-app-i7ud.onrender.com/', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true
   // allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
  }));
  


const __dirname = path.resolve();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
})

app.use(express.json())
app.use(cookieParser()) // to access cookies

server.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})
app.get("/", (req,res) =>{
    res.send("Hello world");
})

app.use("/",indexRouter);

// export default app;
