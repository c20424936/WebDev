import React,{useState} from 'react'
import Footer from '../components/Footer';
import Header from '../components/header';
import Sidenav from '../components/sidebar';
import Backbutton from '../components/modal';
import Backdrop from '../components/Backdrop';


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
      <div class="card">
      <img width='150px'
       height='200px' src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" alt='COVER' />
        <div class="cardcontainer">
        <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      </div>
      <Footer/>


     
      {Open && <Backbutton onClick={GoBack}/>}
      {Open && <Backdrop onClick={GoBack}/>}
       
    </div>
  )
}

export default Top10;