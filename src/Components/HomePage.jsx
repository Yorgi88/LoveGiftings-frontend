import React from 'react'

import Journals from './Journals';
import Bottles from './Bottles';
import Cups from './Cups';
import GiftPacks from './GiftPacks';
import Footer from './Footer';
import Contact from './Contact';
import Carousel from '../CarouselTest/Carousel'
import DetailsTest from '../CarouselTest/DetailsTest';
import CartTest from '../CarouselTest/CartTest';

const HomePage = () => {
  return (
    <div>
      {/* <Carousel/> */}
      {/* <DetailsTest/> */}
      {/* <CartTest/> */}
      <Journals/>
      <Bottles/>
      <Cups/>
      <GiftPacks/>
      <Footer/>
     
    </div>
  )
}

export default HomePage
