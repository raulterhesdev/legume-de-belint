import React, { useState } from 'react'

import classes from './ShopItem.module.css'

const ShopItem = (props) => {
   const [hover, setHover] = useState(false)

   const toggleHover = () => {
      setHover(previous => !previous)
   }

   const buttonStyle = {
      transition: "all 0.2s ease-out"
   }

   return (
      <div className={classes.ShopItem}>
         <img src={props.imageUrl} alt={props.imageAlt} className={classes.Image}/>
         <div className={classes.Info}>
            <p className={classes.Title}>{props.title}</p>
            <div className={classes.PriceContainer}>
               <p className={classes.Price}>{props.price} Lei / {props.unit}</p>
            </div>
            <button 
            style={buttonStyle}
            className={!hover ? classes.Button : `${classes.Button} ${classes.ButtonHover}`} 
            onClick={() => {props.onAddToCart(props.id)}}
            onMouseEnter={toggleHover} 
            onMouseLeave={toggleHover}
            >
               Adauga in Cos
            </button>
         </div>
      </div>
   )
}

export default ShopItem
