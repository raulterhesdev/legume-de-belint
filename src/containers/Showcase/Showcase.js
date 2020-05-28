import React from 'react'

import classes from './Showcase.module.css'

import CarouselSlider from '../../components/Showcase/Carousel/Carousel'
import Presentation from '../../components/Showcase/Presentation/Presentation'

const Showcase = (props) => {
   return (
      <div className={classes.Showcase}>
         <div className={classes.Container}>
            <CarouselSlider />
            <Presentation />
         </div>
      </div>
   )
}

export default Showcase
