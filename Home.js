import React,{useState} from "react";
import Modal from "./modal";
import Backdrop from "./Backdrop";


const Home = () => {
  const [Open,setOpen] = useState(false);
  
  function AreYouSure() {
    setOpen(true);
  }

  function GoBack() {
    setOpen(false);
  }

  
    return(
      <body className='body'>
      
      <img width="150" height="200" src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />

      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
      
      <img width="150" height="200" src="https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg" />

      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
       
      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
      
      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
    
      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
      
      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
      
      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
       
      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
      
      <button className="btn" onClick={AreYouSure}>Add to Cart</button>
      
      
        <a href="/custom-catalog/mega-menu/bestseller-charts/top-20-fiction/" class="btn">top 20 fiction</a>
          


      {Open && <Modal onClick={GoBack}/>}
      {Open && <Backdrop onClick={GoBack}/>}
      
      </body>
  )
}

export default Home
