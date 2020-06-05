import React, { useState , useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'

import classes from './Orders.module.css'

import Order from './Order/Order'
import PrimaryButton from '../../../UI/PrimaryButton/PrimaryButton'

import * as adminActions from '../../../../store/actions/adminActions'

const Orders = () => {
   const dispatch = useDispatch()

   const [expandAll, setExpandAll] = useState(true)

   useEffect(() => {
      const fetchData = async () => {
         await dispatch(adminActions.fetchOrderData())
      }
      fetchData();
   },[dispatch])

   const orders = useSelector(state => state.admin.orders)
   const displayContent = []
   if(orders){
      let index=1
      orders.forEach(order => {
         const orderComponent = (
            <Order key={index} index={index} order={order} expandAll={expandAll}/>
         )
         displayContent.push(orderComponent)
         index +=1
         
      }); 
   } 

   return (
      <div  className={classes.Orders}>
         <div className={classes.ActionContainer}>
            <PrimaryButton onClick={()=> setExpandAll(prev => !prev)}>
               {expandAll ? "Restrangere" : "Expandare"}
            </PrimaryButton>
         </div>
         <div className={classes.OrdersContainer}>
            {displayContent}
         </div>
      </div>
   )
}

export default Orders
