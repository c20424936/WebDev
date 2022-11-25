
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import BookRoute from "./routes/bookRoute.js"
 
const app = express();
mongoose.connect('mongodb+srv://C20437052:Scampidog12@cluster0.5nq8pul.mongodb.net/pinvent-app?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(BookRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));