import React from 'react'
import { NavLink } from 'react-router-dom'
import './Hero.css'
import image1 from '../Assetes/w3.jpg'
import {  useGlobalContext } from '../context'

const Hero = () => {
  const {name,image,heading}=useGlobalContext();
    // const firstName=useContext(AppContext);
    // const firstName=useGlobalContext();

  return (
    <div className='main-hero'>
        
        <div className='grid-two-column'>
            
            <div className='main-top-data'>
                <h1 className='hero-heading'>{heading}</h1>
                <p className='hero-top-data'>
                    I am {name}.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet eaque sint impedit. Voluptatem ipsa porro fugit asperiores dolorem dolor quidem quisquam accusamus iusto optio aspernatur at debitis, reiciendis tempore possimus nostrum molestiae perferendis commodi. Accusantium quam rerum suscipit magni dolor, laboriosam tempore obcaecati sapiente facere dolorem molestiae facilis officia mollitia.
                </p>

            
            <button className='hero-btn'>
                <NavLink to="/contact" style={{textDecoration:'none'}}>APPLY HERE</NavLink>
            </button>
            
            </div>   
        </div>
        <div className="hero-image">
            <img style={{width:'100%'}} src={image} alt="" />
            </div>
      
    </div>
  )
}

export default Hero
