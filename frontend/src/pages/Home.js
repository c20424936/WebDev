import React,{useState} from "react";
import {Card,  Row } from 'react-bootstrap';



import Backbutton from "../components/modal";
import Back from "../components/Backdrop";
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
      <Row xs={1} md={4} className="g-4">
         
      <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src="The-war-of-the-worlds.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>The War of the Worlds</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src="IT.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>IT</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src="Gatsby.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>The Great Gatsby</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>
 

    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Pride+Pre.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Pride and Prejudice</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_1.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_2.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    
    </Card> <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_3.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>
</Row>
      
  
      
      {Open && <Backbutton onClick={GoBack}/>}
      {Open && <Back onClick={GoBack}/>}
      
     </div>
     
    
      <Footer/>
      </div>
  )
}

export default Home
