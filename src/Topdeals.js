
import "./Topdeals.css";
import "./Dealsoftheday.css";
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
        
       <h4>Top Deals on Devices</h4>
       <button>View All</button>
       
       </div>
       <hr/>
       <div className="cont__1">
      
          <Slider {...settings}>
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/keuagsw0/otg-new/6/z/z/12382-pigeon-20-original-imafvfqcbutbzjnj.jpeg?q=70"
           productname="Oven Toaster Grills"
           offer="Min 20% Off"
           offer1="Explore Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/jt395zk0/dining-table/z/j/t/4-seater-carbon-steel-lm01-limraz-furniture-brown-original-imafegnbmprkpypa.jpeg?q=70"
           productname="Dining Tables"
           offer="Min 30% Off"
           offer1="Shop Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kh2b4i80/portable-laptop-table/y/z/c/mfb-melamine-fiberboard-multipurpose-foldable-laptop-table-with-original-imafx5u4unqsftbk.jpeg?q=70"
           productname="Tables"
           offer="Min 50% Off"
           offer1="Explore Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k51cpe80/tv-entertainment-unit/f/p/q/mdf-fk-26-limraz-furniture-wenge-original-imafntctwrrqyhpg.jpeg?q=70"
           productname="TV Entertainment Units"
           offer="Min 40% Off"
           offer1="Hurry Up"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kmuxevk0/inflatable-sofa/f/9/g/3-seater-vinyl-n-bw-75054-62002-nhr-original-imagfnwu6gzxcs3b.jpeg?q=70"
           productname="Sofas"
           offer="Min 40% Off"
           offer1="Shop Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kkimfm80/air-purifier/k/g/9/home-spa-luxury-home-office-cool-mist-aroma-diffuser-humidifier-original-imafzugyysstuuvj.jpeg?q=70"
           productname="Air Purifiers"
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
    


