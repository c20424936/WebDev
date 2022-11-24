import React,{useState}from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav from '../components/sidebar';
import Modal from '../components/modal';
import Backdrop from '../components/Backdrop';


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
      <div class="card">
      <img width='150px'
       height='200px' src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />
        <div class="cardcontainer">
        <button className="btn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      </div>
      <Footer/>


     
      {Open && <Modal onClick={GoBack}/>}
      {Open && <Backdrop onClick={GoBack}/>}
       
    </div>
  )
}
 
export default AllBooks; 