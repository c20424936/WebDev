import express from "express";
import { //import all the functions from book controller
    getBooks, 
    getBookById,
    saveBook,
    updateBook,
    deleteBook
} from "../controllers/bookController.js";

//set up the router to be able to configure the routes for the functions
const router = express.Router();

//Set up the routes for the functions relating to book 
//Use post to send data, get to recieve data, patch to change data and delete to delete the data
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', saveBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

//export all the routes
export default router;