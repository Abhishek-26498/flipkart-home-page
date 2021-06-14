
import "./Topdeals.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 

import Products from "./Productcomp.js";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block", 
        background: "grey",
        height:"100px",
        width:"47px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:"7px",
        borderBottomLeftRadius:"7px"
        
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block", 
        background: "grey",
        height:"100px",
        width:"47px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:"1",
        left:"0",
        borderTopRightRadius:"7px",
        borderBottomRightRadius:"7px"
      }}
      onClick={onClick}
    />
  );
}


export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
        
       
      };
      return (
        <div className="cont">
          <div className="topdeal">
        <div className="topdeals">
        
       <h4>Personal Care Devices</h4>
       <button>View All</button>
       
       </div>
       <hr/>
       <div className="cont__1">
      
          <Slider {...settings}>
           <Products
           imgsrc="https://rukminim1.flixcart.com/flap/150/150/image/72be0f68543e7c57.jpg?q=70"
           productname="Nova Styling Range"
           offer="Min 20% Off"
           offer1="Explore Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kbjox3k0/vaporizer/z/b/s/usa-model-906-professional-face-nose-steam-breathing-inhaler-original-imafsveqxyuuu7ne.jpeg?q=70"
           productname="Best of Steamer Vaporiser"
           offer="Min 30% Off"
           offer1="Shop Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/jmxrwy80/bp-monitor/g/j/3/omron-hem-7130-l-hem-7130-l-blood-pressure-monitor-with-large-original-imaf9n6pvygjhgca.jpeg?q=70"
           productname="Best of Health Care Devices"
           offer="Min 50% Off"
           offer1="Explore Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kao98cw0/vaporizer/6/w/z/nano-mist-spray-sanitizer-atomiser-for-car-currency-mobile-original-imafs77gmhhcnvz3.jpeg?q=70"
           productname="Spray Sanitizer and Atomiser"
           offer="Min 40% Off"
           offer1="Hurry Up"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k3hmj680/electric-toothbrush/w/z/t/oral-b-frozen-electric-rechargeable-frozen-electric-rechargeable-original-imafgs2dznaxxmp6.jpeg?q=70"
           productname="Electric Toothbrush"
           offer="Min 40% Off"
           offer1="Shop Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kaijgy80/massager/3/9/k/dr-physio-powerful-body-massagers-with-vibration-massager-for-original-imafs2h3brgkg9uu.jpeg?q=70"
           productname="Range of Massagers"
           offer="Min 40% Off"
           offer1="Buy Now!"
           />
           
           
           
          
          </Slider>
          </div>
        </div>
        </div>
      );
    }
  }
    


