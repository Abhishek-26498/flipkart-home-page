
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
        
       <h4>Health Care Essentials</h4>
       <button>View All</button>
       
       </div>
       <hr/>
       <div className="cont__1">
      
          <Slider {...settings}>
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k9a8tjk0/mask-respirator/x/m/u/mb25-jokot-original-imafr4fkzycwacxd.jpeg?q=70"
           productname="Jokot Surgical Mask"
           offer="Shop Now"
           offer1=""
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k9pynww0/mask-respirator/6/b/z/pmsmrgf883728-louis-philippe-original-imafrfyqzzzgguay.jpeg?q=70"
           productname="Louis Philippe"
           offer="Shop Now"
           offer1=""
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/jtrjngw0/surgical-head-cap/n/w/t/disposable-bouffant-cap-pack-of-150-surgical-head-cap-befit-original-imafevd2ugamkyms.jpeg?q=70"
           productname="Surgical Head Caps"
           offer="Shop Now"
           offer1=""
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k7m8brk0/mask-respirator/h/9/m/pp-2546-venus-original-imafpt5hhshgsgga.jpeg?q=70"
           productname="Health Care Accessory"
           offer="Shop Now"
           offer1=""
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k9k8wi80/mask-respirator/h/n/r/ahmscrgp852209-allen-solly-original-imafrbwymwt5hky8.jpeg?q=70"
           productname="Allen Solly"
           offer="Shop Now"
           offer1=""
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k9yjb0w0/mask-respirator/q/m/b/12540-black-l-wildcraft-original-imafrmy4xuzgm8sa.jpeg?q=70"
           productname="Wildcraft"
           offer="Shop Now"
           offer1=""
           />
           
           
          
          </Slider>
          </div>
        </div>
        </div>
      );
    }
  }
    


