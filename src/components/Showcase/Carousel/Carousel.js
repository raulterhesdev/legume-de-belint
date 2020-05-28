import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import classes from './Carousel.module.css'



const CarouselSlider = (props) => {
   const content = [
      {
         url: require('../../../assets/images/carousel/carousel (3).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../../assets/images/carousel/carousel (4).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../../assets/images/carousel/carousel (5).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../../assets/images/carousel/carousel (6).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../../assets/images/carousel/carousel (7).jpg'),
         legend:"Text 1"
      }
   ]

   let carouselContent = content.map(key => {
      return (
      <div key={key.url}>
         <img src={key.url} alt={key.legend}/>
      </div>
      )
   })

   return (
      <div className={classes.CarouselContainer}>
         <Carousel 
         className={classes.Carousel}
         >
            {carouselContent}
         </Carousel>
      </div>
   )
}

export default CarouselSlider