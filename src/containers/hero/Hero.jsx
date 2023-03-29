import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import hero from '../../assest/Hero.png'

import './hero.css'

function Hero() {
  return (
    <div className="organick__hero">
      <div className="organick__hero-text">
        <p className="text_italic">100% Natural Food</p>
        <h1>Choose the best healthier way of life</h1>
        <a href="#" className='btn'>Explore Now <FaArrowCircleRight /></a>
      </div>
    </div>
  )
}

export default Hero