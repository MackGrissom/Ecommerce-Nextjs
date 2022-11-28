import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

// import ReactPlayer from "react-player";
// import vid0 from '/beachvid.mp4';



const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">

      {/* < ReactPlayer
      url='https://www.pexels.com/video/waves-rushing-and-splashing-to-the-shore-1409899/'
        className="video"
        src={vid0}
        autoPlay={true}
        volume={0}
        muted={true}
      /> */}

      <div>
        <h3 className='text-[#e88f09]'>{heroBanner.midText}</h3>
        <br />
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h1 className=''>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image hover:animate-pulse" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button" className=' hover:bg-black hover:animate-bounce'>{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">

            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner