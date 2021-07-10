import React from 'react';
import { Button } from './Button';
import "./HeroSection.css";
import '../App.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Calgary Yemen Initiative</h1>
            <p>Come On and Help Out Today!</p>
            <div className="hero-btns">
            <a href="https://donate.islamicreliefcanada.org/shop/product/900ye-yemen-emergency-appeal-96?fund-type=1&amount=&product=900ye-disaster-relief-yemen-96" 
            class="waves-effect waves-light btn-large indigo accent-2"> Donate Today! 
            </a>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiIvT9SFk8_r6XO4sC9dBWw2EQqRTj3umpFlkTtg7Wo6kM_A/viewform?usp=sf_link" class="waves-effect waves-light btn-large indigo accent-2 ">Get Involved</a>
            </div>
            
        </div>
    )
}

export default HeroSection
