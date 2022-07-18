import React from 'react';

import './home.css'
import Proud from './../../assests/feelingProud.svg'

const Home = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" id="home" className="home-container">
            <div className="name-description">
                <div className="my-name">
                    Abhinav Raj
                </div>
                <div className="quote">
                    A passionate individual who always thrive to work on 
                    end to end products which develop sustainable and scalable 
                    social and technical systems to create impact.
                </div>
            </div>
            <div className="name-img">
                <img className="my-image" src={Proud} alt="Proud"/>
            </div>
        </div>
    )
}
export default Home;