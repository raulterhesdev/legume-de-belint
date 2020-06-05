import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useSpring, animated} from 'react-spring'

import classes from './Cart.module.css'

import CartItem from '../../components/Cart/CartItem/CartItem'
import CartSummary from '../../components/Cart/CartSummary/CartSummary'
import Modal from '../../components/UI/Modal/Modal'
import PrimaryButton from '../../components/UI/PrimaryButton/PrimaryButton'
import DangerButton from '../../components/UI/DangerButton/DangerButton'

import * as itemsActions from '../../store/actions/itemsActions'
import * as adminActions from '../../store/actions/adminActions'



const Cart = (props) => {
   const dispatch = useDispatch()
   const [showModal, setShowModal] = useState(false)
   const [showConfirmationModal, setShowConfirmationModal] = useState(false)
   const [itemToDelete, setItemToDelete] = useState(null)

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
   
   const openConfirmationModal = (id, totalProductPrice) => {
      setShowModal(true)
      setItemToDelete({id:id, price:totalProductPrice})
   }

   const productRemoveHandler = () => {
      //sending the total price to be removed from the order
      dispatch(itemsActions.removeFromCart(itemToDelete.id, itemToDelete.price))
      setShowModal(false)
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
         removeProduct={() => {openConfirmationModal(key.id, key.price*key.quantity)}}
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
         orderProducts: {...order},
         totalPrice: totalPrice,
         date: new Date()
      }
      dispatch(adminActions.sendOrderData(orderInfo))
      setShowConfirmationModal(true)
      setTimeout(() => {
         setShowConfirmationModal(false)
      }, 2500);
   }

   const closeModalHandler = () => {
      setShowModal(false)
      setShowConfirmationModal(false)
   }

   const fade = useSpring({
      from: {
         opacity: 0,
         transform: 'translate3d(40px,-40px,0)'
      },
      to: {
         opacity: 1,
         transform: 'translate3d(0,0px,0)'
      }
   })


   return (
      <React.Fragment>
         <Modal show={showModal} modalClosed={closeModalHandler}>
            <p className={classes.ModalText}>Aceasta actiune va elimina produsul din cos. Confirmati actiunea?</p>
            <div className={classes.ModalButtons}>
               <PrimaryButton onClick={closeModalHandler}>Renunta</PrimaryButton>
               <DangerButton onClick={productRemoveHandler}>Elimina</DangerButton>
            </div>
         </Modal>
         <Modal show={showConfirmationModal} modalClosed={closeModalHandler} transparentBackdrop>
            <p className={classes.ModalText}>Comanda a fost trimisa. Va vom contacta pentru confirmare</p>
         </Modal>
         <div className={classes.container}
         >
            <div className={classes.CartContainer} >
               <animated.div className={classes.Cart} style={fade}>
                     {orderContent}
               </animated.div>

               <animated.div className={classes.CartDetails} style={fade}>
                  <CartSummary 
                  totalPrice={totalPrice}
                  orderPlaced={orderPlacedHandler}
                  buttonAvailable={buttonAvailable}/>
               </animated.div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Cart
