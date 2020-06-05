import React from 'react'

import classes from './ShopItem.module.css'

import PrimaryButton from '../../../components/UI/PrimaryButton/PrimaryButton'

const ShopItem = (props) => {
   
   return (
         <div className={classes.ShopItem} >
            <img src={props.imageUrl} alt={props.imageAlt} className={classes.Image}/>
            <div className={classes.Info}>
               <p className={classes.Title}>{props.title}</p>
               <div className={classes.PriceContainer}>
                  <p className={classes.Price}>{+props.price} Lei / {props.unit}</p>
               </div>
               {props.enabled ? <PrimaryButton onClick={() => {props.onAddToCart(props.id)}} disabled={!props.enabled}>
                  {props.buttonText}
               </PrimaryButton> : <p className={classes.Unavailable}>{props.disabledText}</p>}
            </div>
         </div>
   )
}

export default ShopItem
