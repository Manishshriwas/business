import React, { useEffect }  from 'react'
import Hero from './Hero'
import image1 from '../Assetes/w3.jpg'
import { useGlobalContext } from '../context'


const About = () => {



  // const data={
  //   name:"BUSINESS IDEAS",
  //   image:image1,
  // }

  const{updateAboutPage}=useGlobalContext();
   
  useEffect(()=>{updateAboutPage();},[]);


  return (
    <div>
      <Hero/>
    </div>
  )
}

export default About
