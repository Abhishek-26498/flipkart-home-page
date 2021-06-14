
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
        
       <h4>Headphones And    Speakers</h4>
       <button>View All</button>
       
       </div>
       <hr/>
       <div className="cont__1">
      
          <Slider {...settings}>
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k5lcvbk0pkrrdj/headphone/dynamic/z/j/h/jbl-c150siublk-original-imafeyby52kxehz2.jpeg?q=70"
           productname="Wired Earphones"
           offer="From ₹ 399"
           offer1="Hurry Up!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k5h2jrk0/speaker/home-theatre/c/w/n/intex-it-2616-tufb-os-original-imafz5g7njyhb2vg.jpeg?q=70"
           productname="Home Theatres"
           offer="Shop Now"
           offer1="New Launches"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k6fd47k0pkrrdj/headphone/z/f/j/jbl-c100tws-original-imafmtrsguv29yz6.jpeg?q=70"
           productname="True Wireless Earphones"
           offer="From ₹ 1,999"
           offer1="Explore Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70"
           productname="Headphones"
           offer="Explore More"
           offer1="New Launches"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/kiqbma80-0/speaker/soundbar/l/l/o/aavante-bar-3100d-boat-original-imafygcgjbcerj7f.jpeg?q=70"
           productname="Dolby Enabled"
           offer="Up to 50% Off"
           offer1="Shop Now!"
           />
           <Products
           imgsrc="https://rukminim1.flixcart.com/image/150/150/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70"
           productname="Headphones Over Ear"
           offer="From ₹ 799"
           offer1="Buy Now!"
           />
           
           
           
          
          </Slider>
          </div>
        </div>
        </div>
      );
    }
  }
    


