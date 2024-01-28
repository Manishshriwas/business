import React from 'react' 
import './Contect.css';

const Contect = () => {
  return (
    <div className='main'>
      <h1 className='main-heading'>Feel Free To Contact Us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.8320549421023!2d83.39818157421466!3d26.749734967077785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144bd504cdd93%3A0xbc7dadf589201d16!2sOrion%20Mall!5e0!3m2!1sen!2sin!4v1706420125511!5m2!1sen!2sin"
       width="100%"
        height="450"
         style={{border:0}}
          allowfullscreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
          <div className='container'>
            <div className='contact-form'>
              <form action='https://formspree.io/f/mpzvqkyw' method='POST' className='contact-inputs'>
                <input className='user-email'
                type="text"
                name="username"
                placeholder='username'
                autoComplete='off'
                required
                 />
                 <input className='user-email'
                type="email"
                name="Email"
                placeholder='Email'
                autoComplete='off'
                required
                 />
                 <textarea name="message"
                  id="" cols="30"
                   rows="10"
                   autoComplete='off'
                required
                ></textarea>
                <input className='submit-btn' type="submit" value="send"/>

              </form>
            </div>
          </div>
      

    </div>
  )
}

export default Contect
