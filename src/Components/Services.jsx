import React, { useEffect } from 'react';
import Hero from './Hero';
import image1 from '../Assetes/w3.jpg';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';

const Services = () => {
  const { updateServicesPage, getservices } = useGlobalContext();
  // console.log(services);

  useEffect(() => {updateServicesPage();}, []);

  return (
    <>
      <Hero />

     
          
    </> 
    
  );
};

export default Services;
