import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <p className='beats-solo'> SMALL TEXT</p>
<h3> MID TEXT</h3>

<img src='' alt='tshirt' className='hero-banner-image' />

<div> 
  <Link href='/product/ID'> 
  <button type='button'> Button Text </button>
  </Link>
  <div className='desc'>
    <h5> Description...</h5> 
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem ea mollitia aspernatur assumenda est similique quidem maxime qui magnam. Repellat aut commodi ab corporis atque autem enim a quisquam!</p>

  </div>
</div>


    </div>
  )
}

export default HeroBanner