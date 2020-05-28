import React, { useState } from 'react'

import classes from './CartItem.module.css'

const CartItem = (props) => {
   const product = {...props.product}
   const [hover, setHover] = useState(false)

   const toggleHover = () => {
      setHover(previous => !previous)
   }

   const buttonStyle = {
      transition: "all 0.2s ease-out"
   }

   return (
      <div className={classes.CartItem}>
         <img 
         src={product.imageUrl} 
         alt={product.imageAlt}
         className={classes.Image}
         />
         <div className={classes.Info}>
            <div className={classes.Group}>
               <p className={classes.Title}>{product.title}</p>
               <p className={classes.PricePer}>
                     {product.price} Lei / {product.unit}
               </p>
            </div>
            <div className={classes.Group}>
               <input 
               type="number" 
               step={1} 
               className={classes.Input} 
               onChange={(event) => {props.onChange(event.target.value, product.id, product.price)}}
               value={product.quantity} />
               <p className={classes.Total}>Total: {product.price * product.quantity} Lei</p>
            </div>
         </div>
         <button 
         className={hover ? classes.DangerButtonHover : classes.DangerButton}
         style={buttonStyle}
         onClick = {props.removeProduct}
         onMouseEnter={toggleHover} 
         onMouseLeave={toggleHover}>
            Elimina
         </button>
      </div>
   )
}

export default CartItem
