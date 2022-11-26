import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header";
import Sidenav from "../components/sidebar";
 
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity,setQuantity]= useState("");
  const [price,setPrice] = useState("");
  const [photo,setPhoto] = useState("");
  const navigate = useNavigate();
 
  const saveBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", {
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
      <div className="column is-half">
      <div className="Home"><div className="form">
        <form onSubmit={saveBook}>
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

    </div>
    </>
  );
};
 
export default AddBook;