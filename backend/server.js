//Imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import BookRoute from "./routes/bookRoute.js"


const app = express();
//Connect to the mongodb atlas server 
mongoose.connect('mongodb+srv://C20437052:Scampidog12@cluster0.5nq8pul.mongodb.net/pinvent-app?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
//if you dont connect 
db.on('error', (error) => console.log(error));
//if connection works
db.once('open', () => console.log('Database Connected...'));

//Set up the app to use all the routes and express 
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(BookRoute);

//set the server to port 5000 
app.listen(5000, ()=> console.log('Server up and running...'));