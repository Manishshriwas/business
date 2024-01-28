import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contect from './Components/Contect'
import Services from './Components/Services'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Error from './Error'


// import WordDrop from './drop'

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/contact" element={<Contect/>}/>
      <Route path="*" element={<Error/>}/>
      
    </Routes>
    <Footer/>
  </BrowserRouter>
   
  )
}

export default App
