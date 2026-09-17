import React from 'react';
import Baner from '../assets/banner-main.png';
import Shadow from '../assets/bg-shadow.png'; 

const Banner = () => {
    return (
        <div 
            className='p-10 my-3 flex flex-col items-center bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${Shadow})` }}
        >
            <img src={Baner} alt="Main Banner" />
        </div>
    );
};

export default Banner;
