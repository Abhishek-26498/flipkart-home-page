import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const MoreT = () => {
    return (
        <div className='moret'>
         <div  className='moret__in'>
        <NotificationsIcon/>
        <p>Notification Preferences</p>
        </div> 
        <hr/>
         <div  className='moret__in'>
        <MonetizationOnIcon/>
        <p>Sell on Flipkart</p>
        </div> 
        <hr/>
         <div  className='moret__in'>
        <LiveHelpIcon/>
        <p>24x7 Customer Care</p>
        </div>
        <hr/> 
         <div  className='moret__in'>
        <TrendingUpIcon/>
        <p>Advertise</p>
        </div>
        <hr/> 
         <div  className='moret__in'>
        <GetAppIcon/>
        <p>Download App</p>
        </div>
         
        
        </div>
    )
}

export default MoreT
