import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import classes from './Shop.module.css'

import ShopItem from '../../components/Shop/ShopItem/ShopItem'

import * as itemsActions from '../../store/actions/itemsActions'

const Shop = (props) => {
   const dispatch = useDispatch()

   const addToCartHandler = (id) => {
      dispatch(itemsActions.addToCart(id))
      
   }

   const vegetables = useSelector(state => state.items.products)


   let vegetableContent = vegetables.map(key => {
      return (
         <ShopItem 
         key={key.id}
         id={key.id}
         imageUrl={key.imageUrl}
         imageAlt={key.imageAlt}
         title={key.title}
         price={key.price}
         unit={key.unit}
         onAddToCart={addToCartHandler}
         />
      )
   })


   

   return (
      <div className={classes.container}>
         <div className={classes.Shop}>
            {vegetableContent}
         </div>
      </div>
   )
}

export default Shop
