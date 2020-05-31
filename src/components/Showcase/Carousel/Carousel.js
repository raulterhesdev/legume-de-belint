import React from 'react'
import {useSelector} from 'react-redux'
import {useSpring, animated} from 'react-spring'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import classes from './Carousel.module.css'



const CarouselSlider = (props) => {
   const content = useSelector(state => state.admin.carouselItems)

   let carouselContent = content.map(key => {
      return (
      <div key={key.url}>
         <img src={key.url} alt={key.legend}/>
         <p className={classes.Legend}>{key.legend}</p>
      </div>
      )
   })

   const fade = useSpring({
      from: {
         opacity: 0,
         transform: 'translate3d(-50px,50px,0)'
      },
      to: {
         opacity: 1,
         transform: 'translate3d(0,0px,0)'
      }
   })


   const arrowStyleRight = classes.ArrowStyle + ' ' + classes.ArrowRight 
   const arrowStyleLeft = classes.ArrowStyle + ' ' + classes.ArrowLeft

   const indicatorActiveStyle = classes.IndicatorStyle + ' ' + classes.IndicatorActive

   return (
      <animated.div className={classes.CarouselContainer} style={fade}>
         <Carousel 
         className={classes.Carousel}
         statusFormatter={(current, total) => ``}
         renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
               <button type="button" onClick={onClickHandler} title={label} className={arrowStyleLeft} >
                     <i className="fas fa-caret-left fa-2x" ></i>
               </button>
            )
         }
         renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
               <button type="button" onClick={onClickHandler} title={label} 
               className={arrowStyleRight}
               >
                     <i className="fas fa-caret-right fa-2x"></i>
               </button>
            )
         }
         renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
               return (
                  <li
                     className={indicatorActiveStyle}
                     aria-label={`Selected: ${label} ${index + 1}`}
                     title={`Selected: ${label} ${index + 1}`}
                  />
               );
            }
            return (
               <li
                  className={classes.IndicatorStyle}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
               />
            );
         }}
         renderThumbs={() => null}
         >
            {carouselContent}
         </Carousel>
      </animated.div>
   )
}

export default CarouselSlider