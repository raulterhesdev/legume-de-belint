import React , {useEffect , useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import classes from './Order.module.css'

import * as itemsActions from '../../../../../store/actions/itemsActions'

const Order = ({order, showVegetables, showContact,index, ...props}) => {
   const dispatch = useDispatch()
   const products = useSelector(state => state.items.products)

   const [expanded, setExpanded] = useState()
   
   useEffect(() => {
      const fetchData = async () => {
         dispatch(itemsActions.fetchProductData())
      }
      
      if(products.length === 0) {
         fetchData();
      }
      
   }, [products, dispatch])

   useEffect(() => {
      setExpanded(props.expandAll)
   }, [props.expandAll, setExpanded])

   var vegetableData = []
   if(products.length !== 0){
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
            <div key={Math.random()} className={classes.Product}>
               <p className={classes.Span}>{product.quantity}</p>
               <p className={classes.Span}>{product.unit}</p>
               <p className={classes.Span}>{product.title}</p>
            </div>)
            vegetableData.push(componentData)
         });
   }


   const expandData = () => {
      setExpanded(prev => !prev)
   }

   return (
      <div className={classes.Order}>
         <div className={classes.OrderSummary}>
            <p>{`${order.contactInfo.name} ${order.contactInfo.surname}`}</p>
            <p>{order.totalPrice}Lei</p>
            <p>{order.date.toString().slice(0,10)} {order.date.toString().slice(11,16)}</p>
            <button onClick={expandData} className={classes.ExpandButton}>{expanded ? <i className="far fa-minus-square"></i> : <i className="far fa-plus-square"></i>}</button>
         </div>
         {expanded ? <div className={classes.OrderData}>
            <div className={classes.Details}>
               <p className={classes.Contact}>Contact:</p>
               <p className={classes.Contact}>{`Nume: ${order.contactInfo.name} ${order.contactInfo.surname}`}</p>
               <p className={classes.Contact}>{`Telefon: ${order.contactInfo.phone}`}</p>
               <p className={classes.Contact}>{`Adresa: ${order.contactInfo.address}`}</p>
               <p className={classes.Contact}>{`Email: ${order.contactInfo.email}`}</p>
            </div>
            <div className={classes.Details}>
               <p className={classes.Contact}>Produse:</p>
               {vegetableData}
            </div>
         </div> : null}
      </div>
   )
}

export default Order
