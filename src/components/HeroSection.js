import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted />
        <h1>Robotic Solutions</h1>
        <p>We Solve your problem</p>
        <div className='hero-btns'>
      
        
        </div>
      </div>
    )
}

export default HeroSection
