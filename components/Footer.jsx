import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className="footer-container">
    <p>2022 Raknarin Clothing LLC All rights reserverd</p>
    <p className="icons">
    <a href='www.instagram.com/saintofthebeachofficial'>
    <AiFillInstagram />
    </a>
    </p>
    </div>
    )
  }
  
  export default Footer