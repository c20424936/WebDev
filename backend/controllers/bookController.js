//Import the scheama for the book database form the model
import Book from  "../models/bookModels.js";

//Get the data from the books databse and sned that onward
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {//if function failed 
        //if you cannot get the data return an error
        res.status(500).json({message: "Error with the database connection"});
    }
}

//get a specific documents data from the database using the id as the index
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) { //if function failed 
        res.status(404).json({message: "Cannot find a document with that idea"});
    }
}

//Add a book to the database and save it to a document
export const saveBook = async (req, res) => {
    const book = new Book(req.body);
    try {
        const insertedbook = await book.save();
        res.status(201).json(insertedbook);
    } catch (error) { //if failed 
        res.status(400).json({message: "Cannot save this data as a book"});
    }
}

//function to Update the books information based on the id to specify the document
export const updateBook = async (req, res) => {
    try {
        const updatedbook = await Book.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedbook);
    } catch (error) { // if function failed
        res.status(400).json({message: ""});
    }
}

//function to delete the document based on the id 
export const deleteBook = async (req, res) => {
    try {
        const deletedbook = await Book.deleteOne({_id:req.params.id});
        res.status(200).json(deletedbook);
    } catch (error) {//if function failed
        res.status(400).json({message: "Cannot delete that document"});
    }
}