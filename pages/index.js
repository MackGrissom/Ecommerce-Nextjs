import React from 'react'
import { Product, FooterBanner, HeroBanner} from '../components'

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
  
  export default index