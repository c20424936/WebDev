import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css'


function MyCarousel() {
  return (
    <Link to="/AllBooks"><Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto "
          src="Caterpillar.jpeg" alt="Hungry Hungry Caterpillar" height='300px' 
          width='275px'
        
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="The-Catcher-in-the-Rye.jpg" alt="Rye Cover" height='300px' 
          width='275px'
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="1984.jpg" alt="1984 Cover" height='300px' 
          width='275px'
        
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Link>
  );
}

export default MyCarousel;