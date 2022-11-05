import React from 'react'
import { Product, FooterBanner, HeroBanner} from '../components'
import {client} from '../lib/client';
import banner from '../sanity_raknarin/schemas/banner';

const index = () => {
  return (
    <>
    < HeroBanner />
    
    <div className='products-heading'> 
    <h2> Newest Product Drops </h2>
    <p> Check Out Our Newest Limited T-shirts Designs</p>
    </div>
    
    <div className='products-container'> 
    {['product1', 'product2'].map( (product) => product )}
    </div>
     

     <FooterBanner /> 
    </>
    )
  }
  export const getServerSideProps =  async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props: {products, bannerData}
    }
  }
  export default home
  