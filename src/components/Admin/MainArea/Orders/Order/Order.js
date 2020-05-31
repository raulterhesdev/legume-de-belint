import React from 'react'
import {useSelector} from 'react-redux'

import classes from './Order.module.css'

const Order = ({order, showVegetables, showContact,index, ...props}) => {

   const products = useSelector(state => state.items.products)

   var vegetableData = []
   if(showVegetables){
      var orderProducts = []
      for (const key in order.orderProducts) {
         if (order.orderProducts.hasOwnProperty(key)) {
            const quantity = order.orderProducts[key];
            const product = products.filter(prod => prod.id === key)
            product[0].quantity = quantity
            orderProducts.push(product[0])
         }
      }
      orderProducts.forEach(product => {
         const componentData = (
         <p key={Math.random()}>
            {product.quantity}x{product.unit} {product.title}
         </p>)
         vegetableData.push(componentData)
      });
   }
   


   var contactData = []
   if(showContact){
      for (const key in order.contactInfo) {
         if (order.contactInfo.hasOwnProperty(key)) {
            const element = order.contactInfo[key];
            const componentData = (<p key={Math.random()}>{element}</p>)
            contactData.push(componentData)
         }
      }
   }
   return (
      <div className={classes.Order}>
         <p>{index}</p>
         {contactData}
         {vegetableData}
         <p>{order.totalPrice}</p>
         <p>{order.date.toISOString().slice(0, 10)} {order.date.toISOString().slice(11, 16)}</p>
         <p></p>
      </div>
   )
}

export default Order
