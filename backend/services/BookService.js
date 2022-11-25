const Bookmodel = require("../models/bookModels");


exports.getAllBooks = async() => {
    return await Bookmodel.find();

};

exports.creteBook = async(Book) =>{
    return await Bookmodel.create(book);
};

exports.getBookById = async(_id) =>{
    return await Bookmodel.findById(id);
};

exports.updateBook = async(_id, Book) => {
    return await Bookmodel.findbyIdAndUpdate(id, Book);
};

exports.deleteBook = async (_id) => {
    return await Bookmodel.findByIdAndDelete(id);
};
