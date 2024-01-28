import React from 'react'
import image from '../Assetes/m5.jpg';
import './Home.css'

const Home = () => {
  return (
    <div className='main-home'>
      <div className='main-image'>
        
        <img src={image} alt=''/>
        <div className='text-on-image'>
        <span style={{'--i': 1}}>W</span>
      <span style={{'--i': 2}}>E</span>
      <span style={{'--i': 3}}>L</span>
      <span style={{'--i': 4}}>C</span>
      <span style={{'--i': 5}}>O</span>
      <span style={{'--i': 6}}>M</span>
      <span style={{'--i': 7}}>E</span>
      
    
        </div>
      </div>
      
    </div>
  )
}

export default Home
