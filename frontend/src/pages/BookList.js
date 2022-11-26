import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Sidenav from "../components/sidebar";
import Footer from "../components/Footer";

const BookList = () => {
  const [books, setBook] = useState([]);
 
  useEffect(() => {
    getBooks();
  }, []);
 
  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBook(response.data);
  };
 
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
    <Header/>
    <Sidenav/>
    
    <div className="columns mt-5">
      <div className="column is-half">
      <div className="Home">
      <h1>Books:</h1>
      <br/>
        <Link to="/UserList" className="newbtn">
          User list
        </Link>
        <Link to="add-book" className="newbtn">
          Add New book
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>title</th>
              <th>author</th>
              <th>quantity</th>
              <th>price</th>
              <th>photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.quantity}</td>
                <td>{book.price}</td>
                <td>{book.photo}</td>
                <td>
                  <Link
                    to={`edit/${book._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBook(book._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
};
 
export default BookList;