import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css'


function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto "
          src="Caterpillar.jpeg" alt="Hungry Hungry Caterpillar" height='345px' width='500px'
        
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="The-Catcher-in-the-Rye.jpg" alt="Rye Cover" height='345px' 
          width='500px'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="1984.jpg" alt="1984 Cover" height='345px' width='500px'
        
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;