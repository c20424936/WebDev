import React,{useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/header';
import Sidenav from '../components/sidebar';
import Backbutton from '../components/button';
import Back from '../components/Backdrop';
import { Card, Row } from 'react-bootstrap';

const Top10 = () => {
 
  const [Open,setOpen] = useState(false);
  
  function MoreInfo() {
    setOpen(true);
  }

  function GoBack() {
    setOpen(false);
  }

  return (
    <div>
      <Header/>
      <Sidenav/>
      <div className='Home'>
        <h1>Our Top 10 Books of the Week!</h1>

        <Row xs={1} md={4} className="g-4 carousel">
      
        <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_5.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter 5</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card> 
    
    <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_6.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter 6</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

  <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
        <Card.Img width='150px' height='200px'  src=" Harry_Potter_7.jpg"alt='COVER'/>
        <Card.Body>
          <Card.Title>Harry Potter 7</Card.Title>
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </Card.Body>
      </Card>

    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Shingeki_no_Kyojin_manga_volume_1.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Attack on Titan Vol.1</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" attack-on-titan-34.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Attack on Titan Vol.34</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    
    </Card> <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" chainsaw-man-vol-1.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Chainsaw man vol 1</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

      <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Caterpillar.jpeg"alt='COVER'/>
      <Card.Body>
        <Card.Title>The Hungry Caterpillar</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

      <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" fullmetal-alchemist-vol-1.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Fullmetal Alchemist vol 1</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" 1984.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>1984</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>
</Row>

      </div>
      
      <Footer/>

     
      {Open && <Backbutton onClick={GoBack}/>}
      {Open && <Back onClick={GoBack}/>}
       
    </div>
  )
}

export default Top10;