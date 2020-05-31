import React from 'react'
import {useSpring, animated} from 'react-spring'

import classes from './CartItem.module.css'

import DangerButton from '../../../components/UI/DangerButton/DangerButton'

const CartItem = (props) => {
   const product = {...props.product}

   const fade = useSpring({
      from: {
         opacity: 0,
         transform: 'translate3d(-40px,-40px,0)'
      },
      to: {
         opacity: 1,
         transform: 'translate3d(0,0px,0)'
      }
   })

   return (
      <animated.div className={classes.CartItem} style={fade}>
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
         <DangerButton 
         onClick = {props.removeProduct}>
            Elimina
         </DangerButton>
      </animated.div>
   )
}

export default CartItem
