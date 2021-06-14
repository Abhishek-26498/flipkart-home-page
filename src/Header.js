import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css';
import Tippy, { tippy } from '@tippy.js/react';
import MoreT from './MoreT';
import LoginT from './LoginT';
import 'tippy.js/themes/light.css'

const Header = () =>{
    return(
        <div className='header'>
            <div className='header1'>
                <img src=" https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""/>
                <div className='header1_1'>
                    <span style={{ 
                        fontSize:'11px',
                        color: 'white',
                        fontStyle:'italic',
                    }}>Explore</span>
                    <span style={{
                        fontSize:"11px",
                        color:"#f9e107",
                        fontStyle:"italic",
                    }}>Plus</span>
                    <span><img width="10" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt='' /></span>
                    </div> 
            </div>
            <div className='header2'>
                <input placeholder='Search for products' type='text'/>
              <SearchIcon/>
            </div>
            <div className='header3'>
                <Tippy
                 
                 interactive={true}
                 theme="light"
                content={<LoginT></LoginT>}
               
                >
                <button>Login</button>
                </Tippy>
            </div>
            <div className='header4'>
                <Tippy  
                 theme="light"
                content={<MoreT></MoreT>}
                interactive={true}
              
                >
                <span>More</span>
                </Tippy>
            <ExpandMoreIcon/>
            </div>
            <div className='header5'>
                <ShoppingCartIcon/>
                <p>Cart</p>

            </div>
        </div>
    )
}

export default Header;