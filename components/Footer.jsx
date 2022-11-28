import React from 'react';
import { AiFillInstagram} from 'react-icons/ai';



const Footer = () => {
  return (
    <div className="footer-container">
    <p>2022 Raknarin Clothing © All rights reserved </p>
    <p className='text-sm'>Need a website? Check out <a href='www.mackgrissom.io'> www.mackgrissom.io </a> or <a href='www.fullcircledesign.io'> Full Circle Web Design</a> </p>
    <p className="icons">
    <a href='www.instagram.com/saintofthebeachofficial'>
    <AiFillInstagram />
    </a>
    </p>
    </div>
    )
  }
  
  export default Footer