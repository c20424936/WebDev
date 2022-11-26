import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import Sidenav from "../components/sidebar";
import Footer from "../components/Footer";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [gender, setGender] = useState("Male");
  const [quantity,setQuantity]= useState("");
  const [price,setPrice] = useState("");
  const [photo,setPhoto] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getBookById();
  }, []);
 
  const getBookById = async () => {
    const response = await axios.get(`http://localhost:5000/books/${id}`);
    setTitle(response.data.title);
    setAuthor(response.data.author);
    setQuantity(response.data.quantity);
    setPrice(response.data.price);
    
  };
 
  const updateBook = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/books/${id}`, {
        title,
        author,
        quantity,
        price,
        photo
      });
      navigate("/listbooks");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (   
    <>
    <Header/>
    <Sidenav/>
    
    <div className="columns mt-5">
      <div className="form">
      <div className="Home">
        <form onSubmit={updateBook}>
        <div className="field">
            <label className="label">title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Author</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Quantity</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">photo</label>
            <div className="control">
              <input
                type="file"
                className="input"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Quantity"
              />
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};
 
export default EditBook;