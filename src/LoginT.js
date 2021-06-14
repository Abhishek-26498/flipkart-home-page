import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import StoreIcon from '@material-ui/icons/Store';
import './LoginT.css';


const LoginT = () => {
    return (
        <div className='logint'>
            <div className='logint__in'>
                <h5  style={{color:"black", display:"flex"}}>New customer?</h5>
                <h5>SignUp</h5>
            </div>
            <hr/>
            <div className='logint__in'>
                <AccountCircleIcon/>
                <p>My Profile</p>
            </div>
            <hr/>
            <div className='logint__in'>
                <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                alt=""/>
                <p>Flipkart Plus</p>
            </div>
            <hr/>
            <div className='logint__in'>
                <StoreIcon/>
                <p>Orders</p>
            </div>
            <hr/>
            <div className='logint__in'>
                <FavoriteIcon/>
                <p>Wishlist</p>
            </div>
            <hr/>
            <div className='logint__in'>
                <ConfirmationNumberIcon/>
                <p>Rewards</p>
            </div>
            <hr/>
            <div className='logint__in'>
                <CardGiftcardIcon/>
                <p>Gift Cards</p>
            </div>
        </div>
    )
}

export default LoginT
