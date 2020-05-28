import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import classes from './Cart.module.css'

import CartItem from '../../components/Cart/CartItem/CartItem'
import CartSummary from '../../components/Cart/CartSummary/CartSummary'

import * as itemsActions from '../../store/actions/itemsActions'


const Cart = (props) => {
   const dispatch = useDispatch()

   const order = useSelector(state => state.items.order)
   const products = useSelector(state => state.items.products)
   const totalPrice = useSelector(state => state.items.totalPrice)

   var orderProducts = []
   for (const key in order) {
      if (order.hasOwnProperty(key)) {
         const quantity = order[key];
         const product = products.filter(prod => prod.id === key)
         product[0].quantity = quantity
         orderProducts.push(product[0])
      }
   }

   const productRemoveHandler = (id, totalProductPrice) => {
      console.log('remove' + id)
      //sending the total price to be removed from the order
      dispatch(itemsActions.removeFromCart(id, totalProductPrice))
   }

   const valueChangedHandler = (value, id, price) => {
      dispatch(itemsActions.updateProductQuantity(id, value, price))
   }

   let buttonAvailable = true;
   let orderContent = orderProducts.map(key => {
      return (
         <CartItem 
         key={key.id}
         product={key}
         removeProduct={() => {productRemoveHandler(key.id, key.price*key.quantity)}}
         onChange={valueChangedHandler}
         />
      )
   })
   if(orderContent.length === 0){
      orderContent[0] = (<p key="default">Nu ati adaugat nici un produs in cos. </p>)
      buttonAvailable = false;
   }
   const orderPlacedHandler = (contactInfo) => {
      const orderInfo = {
         contactInfo,
         orderProducts: {order},
         totalPrice: totalPrice
      }
      console.log(orderInfo)
   }

   return (
      <div className={classes.container}>
         <div className={classes.CartContainer}>
            <div className={classes.Cart}>
                  {orderContent}
            </div>
            <div className={classes.CartDetails}>
               <CartSummary 
               totalPrice={totalPrice}
               orderPlaced={orderPlacedHandler}
               buttonAvailable={buttonAvailable}/>
            </div>
         </div>
      </div>
   )
}

export default Cart
