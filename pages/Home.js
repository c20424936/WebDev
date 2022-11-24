import React,{useState} from "react";
import { Link } from "react-router-dom";



import Modal from "../components/modal";
import Backdrop from "../components/Backdrop";
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav  from "../components/sidebar";
import MyCarousel from "../components/Carousel";


const Home = () => {
  const [Open,setOpen] = useState(false);
  
  function MoreInfo() {
    setOpen(true);
  }

  function GoBack() {
    setOpen(false);
  }

  
    return(
      <div >

      <Header/>
      
      <Sidenav/>
      
      <div className="Home">

      <MyCarousel/>

      <div class="card">
      <img width='150px'
       height='200px'
       src="../Caterpillar.jpeg" />

        <div class="cardcontainer">
          <button className="btn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      
      <div class="card">
      <img width='150px' height='200px'
       src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />

        <div class="cardcontainer">
        <button className="btn" onClick={MoreInfo}>Information</button>
        </div>
      </div>


      <div class="card">
      <img width='150px'
       height='200px' src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />
        <div class="cardcontainer">
        <button className="btn" onClick={MoreInfo}>Information</button>
        </div>
      </div>

      <div class="card">
      <img width='150px'
       height='200px' src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />
        <div class="cardcontainer">
        <button className="btn" onClick={MoreInfo}>Information</button>
        </div>
      </div>

      <div class="card">
      <img width='150px'
       height='200px' src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />
        <div class="cardcontainer">
        <button className="btn" onClick={MoreInfo}>Information</button>
        </div>

      </div><div class="card">
      <img width='150px'
       height='200px'src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />
        <div class="cardcontainer">
        <button className="btn" onClick={MoreInfo}>Information</button>
        </div>

      </div><div class="card">
      <img width='150px'
       height='200px'
       src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />
        <div class="cardcontainer">
        <button className="btn" onClick={MoreInfo}>Information</button>
        </div>
      </div>


      {/*<div className="btn"><Link to="/Top10">Top 10 Books of the Week</Link></div>*/}
  
      
      {Open && <Modal onClick={GoBack}/>}
      {Open && <Backdrop onClick={GoBack}/>}
      
     </div>
    
      <Footer/>
      </div>
  )
}

export default Home
