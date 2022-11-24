import React from 'react';
import { Link } from 'react-router-dom';

const MyCarousel = () => {
  return (

    <div class="container">
      <h2>New in</h2>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">



        <div className="carousel-inner">
          <div className="item active">
            <div class="d-flex justify-content-center">
           
              <Link to="/AllBooks"><img src="Caterpillar.jpeg" alt="Hungry Hungry Caterpillar" height='345px' margin-left='auto' /></Link>
            </div></div>

          <div className="item">

            <div class="d-flex justify-content-center">
              <Link to="/AllBooks"><img src="1984.jpg" alt="1984 Cover" height='345px' width='500px' margin='auto' /></Link>
            </div></div>

          <div className="item">
            <div class="d-flex justify-content-center">
              <Link to="/AllBooks"><img src="The-Catcher-in-the-Rye.jpg" alt="Rye Cover" height='345px' margin-left='auto' /></Link>
            </div>
          </div>
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default MyCarousel;
