import React from "react";
import "./Category.css";
import Tippy, { tippy } from '@tippy.js/react';
import 'tippy.js/themes/light.css';
import FashionT from './FashionT.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ElectronicsT from './Electronics.js';
import HomeT from './HomeT';
import AppliancesT from "./AppliancesT.js";
import BeautyandmoreT from "./Beautyandmore.js";


const Categories = () =>
 {
    return (
        <>
      <div className='category'>

      
                  <div className="category_1">
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                 alt="categrypic" className='Category__img'/>
                <h5 >Top Offers</h5>
            </div>

            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                 alt="categrypic" className='Category__img'/>
                <h5 >Grocery</h5>
            </div>
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                 alt="categrypic" className='Category__img'/>
                <h5 >Mobiles</h5>
            </div>
            <div className='categories'>
                
                
           
            
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
                 alt="categrypic" className='Category__img'/>
                 
               <Tippy
                 
                 interactive={true}
                 theme="light"
                content={<FashionT></FashionT>} >
                <h5 >Fashion <ExpandMoreIcon/></h5> 
                
                </Tippy>
               
            </div>
        
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                 alt="categrypic" className='Category__img'/>
                
                <Tippy
                 
                 interactive={true}
                 theme="light"
                content={<ElectronicsT></ElectronicsT>}
                 >
                <h5 >Electronics <ExpandMoreIcon/></h5>
                </Tippy>
            </div>

    
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"
                 alt="categrypic" className='Category__img'/>
                 <Tippy
                 interactive={true}
                 theme="light"
                content={<HomeT></HomeT>} >
                <h5 >Home <ExpandMoreIcon/></h5>
                </Tippy>
            </div>
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                 alt="categrypic" className='Category__img'/>
                <h5 >Top Offers</h5>
            </div>
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                 alt="categrypic" className='Category__img'/>
                   <Tippy
                 interactive={true}
                 theme="light"
                content={<AppliancesT></AppliancesT>} >
                <h5 >Appliances<ExpandMoreIcon/></h5>
                </Tippy>
            </div>
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                 alt="categrypic" className='Category__img'/>
                <h5 >Travel</h5>
            </div>
            <div className='categories'>
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                 alt="categrypic" className='Category__img'/>
                <Tippy
                 interactive={true}
                 theme="light"
                content={<BeautyandmoreT></BeautyandmoreT>} >
                <h5 >Beauty Toys and more<ExpandMoreIcon/></h5>
                </Tippy>
            </div>

           
        </div>
        <hr/>
        </div>
</>
    )
    }
export default Categories;