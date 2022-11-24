import React,{useState} from "react";
import { Link } from "react-router-dom";



import Backbutton from "../components/modal";
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

      <h2>Our Suggestions:</h2>
      <div class="card">
      <img width='150px' height='200px' src="The-war-of-the-worlds.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      
      <div class="card">
      <img width='150px' height='200px'
       src="IT.jpg" alt="IT cover" />
          <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
          </div>
      </div>


      <div class="card">
      <img width='150px'
       height='200px' src="Gatsby.jpg" alt='Great Gatsby' />
        <div class="cardcontainer">
        <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>

      <div class="card">
        <img width='150px' height='200px' src="Pride+Pre.jpg" alt='Pride'/>
          <div class="cardcontainer">
            <button className="newbtn" onClick={MoreInfo}>Information</button>
          </div>
      </div>

      <div class="card">
        <img width='150px' height='200px' src="Harry_Potter_1.jpg" alt='The Catcher in the Rye Cover' />
          <div class="cardcontainer">
            <button className="newbtn" onClick={MoreInfo}>Information</button>
          </div>
      </div>

      <div class="card">
        <img width='150px' height='200px' src="Harry_Potter_2.jpg"alt='The Catcher in the Rye Cover' />
          <div class="cardcontainer">
            <button className="newbtn" onClick={MoreInfo}>Information</button>
          </div>
      </div>

      <div class="card">
        <img width='150px' height='200px' src="Harry_Potter_3.jpg" alt='The Catcher in the Rye Cover' />
          <div class="cardcontainer">
            <button className="newbtn" onClick={MoreInfo}>Information</button>
          </div>
      </div>

      
      {/*<div className="btn"><Link to="/Top10">Top 10 Books of the Week</Link></div>*/}
  
      
      {Open && <Backbutton onClick={GoBack}/>}
      {Open && <Backdrop onClick={GoBack}/>}
      
     </div>
     
    
      <Footer/>
      </div>
  )
}

export default Home
