import React, { useState } from 'react'
import {useSelector} from 'react-redux'

import classes from './Orders.module.css'

import Order from './Order/Order'

const Orders = () => {
   const [showVegetables, setShowVegetables] = useState(true)
   const [showContact, setShowContact] = useState(true)

   const orders = useSelector(state => state.admin.orders)
   const displayContent = []
   let index=1
   orders.forEach(order => {
      const orderComponent = (
         <Order key={index} index={index} order={order} showVegetables={showVegetables} showContact={showContact}/>
      )
      displayContent.push(orderComponent)
      index +=1
   });  

   return (
      <div  className={classes.Orders}>
         <p>Orders</p>
         <label htmlFor="showVegetables">
         <input type="checkbox" title="showVegetables" checked={showVegetables} onChange={()=>{setShowVegetables(prev => !prev)}} />
         Show Vegetables</label>
         <label htmlFor="showContact">
         <input type="checkbox" title="showContact" checked={showContact} onChange={()=>{setShowContact(prev=> !prev)}} />
         Show Contact</label>
         {displayContent}
      </div>
   )
}

export default Orders
