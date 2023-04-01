import React from 'react'
import './about.css'
import fruitImg from '../../assest/Photo.png'
import veganFood from '../../assest/Vegan Food.svg'
import mailboxImg from '../../assest/Mailbox Quality.svg'

function About() {
  return (
    <div className="organick__about">
      <div className="organick__about-img">
        <img src={fruitImg} alt="" />
      </div>

      <div className="organick__about-content">
        <p className="text_italic">About Us</p>
        <h2>We Believe in Working Accredited Farmers</h2>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

        <div className="organick__about-bullet">
          <div className="organick__about-bullet_img">
            <img src={veganFood} alt="" />
          </div>

          <div className="organick__about-bullet_content">
            <h3>Oganic Foods Only</h3>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
          </div>
        </div>
      
        <div className="organick__about-bullet">
          <div className="organick__about-bullet_img">
            <img src={mailboxImg} alt="" />
          </div>
        
          <div className="organick__about-bullet_content">
            <h3>Quality Standards</h3>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
          </div>
        </div>

        <a href="#" className='btn'>Shop Now</a>
      </div>
    </div>
  )
}

export default About