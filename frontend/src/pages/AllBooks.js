import React,{useState}from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav from '../components/sidebar';
import Backbutton from '../components/modal';
import Back from '../components/Backdrop';
import {Card,Row} from 'react-bootstrap'


  
const AllBooks = () => {

  
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
       <h1>  All Books:</h1>
      <Row xs={1} md={4} className="g-4 carousel">
      
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
        <Card.Title>Harry Potter 1</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_2.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter 2</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    
    </Card> <Card style={{ width: '150px', height:'280px', textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_3.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter 3</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '150px', height:'280px',textAlign:'center' }}>
      <Card.Img width='150px' height='200px'  src=" Harry_Potter_4.jpg"alt='COVER'/>
      <Card.Body>
        <Card.Title>Harry Potter 4</Card.Title>
        <button className="newbtn" onClick={MoreInfo}>Information</button>
      </Card.Body>
    </Card>

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
 
export default AllBooks; 
//in /page
