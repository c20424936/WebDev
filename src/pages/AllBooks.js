import React,{useState}from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav from '../components/sidebar';
import Backbutton from '../components/modal';
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

      <div class="card">
      <img width='150px' height='200px' src="Harry_Potter_4.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="Harry_Potter_5.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="Harry_Potter_6.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="Harry_Potter_7.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="Shingeki_no_Kyojin_manga_volume_1.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="attack-on-titan-34.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src=" chainsaw-man-vol-1.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="fullmetal-alchemist-vol-1.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="The-war-of-the-worlds.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="The-war-of-the-worlds.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>      <div class="card">
      <img width='150px' height='200px' src=" chainsaw-man-vol-1.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="fullmetal-alchemist-vol-1.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="The-war-of-the-worlds.jpg"alt='COVER' />
        <div class="cardcontainer">
          <button className="newbtn" onClick={MoreInfo}>Information</button>
        </div>
      </div>
      <div class="card">
      <img width='150px' height='200px' src="The-war-of-the-worlds.jpg"alt='COVER' />
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
 
export default AllBooks; 