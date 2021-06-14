import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Topdeals.css";
const Imageslider = () =>{
  return(<React.Fragment>
  <div className="cont">
  <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/3376/560/image/0c9f83e5c1086d61.jpg?q=50 "
      alt="First slide"
     
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/3376/560/image/bec3d9cad108ee54.jpg?q=50"
      alt="Second slide"
      
      
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/flap/3376/560/image/2ebe9c10c60b4e3e.jpg?q=50"
      alt="Third slide"
      
    />

    
  </Carousel.Item>
</Carousel>
</div>
</div>
    </React.Fragment>
  );
}
export default Imageslider;