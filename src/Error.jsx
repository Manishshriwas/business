import React from 'react'
import ErrorImg from '../src/Assetes/error.jpg'
import './Error.css'
import { NavLink } from 'react-router-dom'


const Error = () => {
  return ( 
    <div className='error-container'>
        <img src={ErrorImg} alt="" />
        <button className='error-btn'>
                <NavLink to="/" style={{textDecoration:'none'}}>Go Back</NavLink>
            </button>
      
    </div>
  )
}

export default Error
