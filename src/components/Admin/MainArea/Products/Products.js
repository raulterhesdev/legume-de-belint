import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import classes from './Products.module.css'

import Modal from '../../../UI/Modal/Modal'
import ShopItem from '../../../Shop/ShopItem/ShopItem'
import EditProduct from './EditProduct/EditProduct'
import PrimaryButton from '../../../UI/PrimaryButton/PrimaryButton'
import DangerButton from '../../../UI/DangerButton/DangerButton'

import * as itemsActions from '../../../../store/actions/itemsActions'
import * as adminActions from '../../../../store/actions/adminActions'


const Products = (props) => {
   const dispatch = useDispatch()
   
   const [showModal, setShowModal] = useState(false)
   const [editItem, setEditItem] = useState()

   const closeModalHandler = () => {
      setShowModal(false)
      setEditItem()
   }

   const openModal = (item) => {
      setShowModal(true)
      setEditItem(item)
   }

   useEffect(() => {
      const fetchData = async () => {
         await dispatch(itemsActions.fetchProductData())
      }
      fetchData();
   },[dispatch])

   const vegetables = useSelector(state => state.items.products)

   let vegetableContentAvailable
   let vegetableContentUnavailable

   if(vegetables) {
      const vegetablesAvailable = vegetables.filter(key => key.enabled === true)
      const vegetablesUnavailable = vegetables.filter(key => key.enabled === false)
      vegetableContentAvailable = vegetablesAvailable.map(key => {
         return (
            <ShopItem 
               style={props}
               key={key.id}
               id={key.id}
               imageUrl={key.imageUrl}
               imageAlt={key.imageAlt}
               title={key.title}
               price={key.price}
               unit={key.unit}
               enabled={true}
               buttonText="Editeaza"
               onAddToCart={() => openModal(key)}
               />
         )
      })
      vegetableContentUnavailable = vegetablesUnavailable.map(key => {
         return (
            <ShopItem 
               style={props}
               key={key.id}
               id={key.id}
               imageUrl={key.imageUrl}
               imageAlt={key.imageAlt}
               title={key.title}
               price={key.price}
               unit={key.unit}
               enabled={true}
               buttonText="Editeaza"
               onAddToCart={() => openModal(key)}
               />
         )
      })
   }

   return (
      <div>
         <Modal show={showModal} modalClosed={closeModalHandler}>
            <EditProduct editItem={editItem} setShowModal={setShowModal}/>
         </Modal>
         <div className={classes.ActionContainer}>
            <PrimaryButton onClick={() => openModal()}>
               Adauga Produs
            </PrimaryButton>
            
         </div>
         <p className={classes.Delimiter}>Produse disponibile</p>
         <div className={classes.Products}>
            {vegetableContentAvailable}
         </div>
         <p className={classes.Delimiter}>Produse indisponibile</p>
         <div className={classes.Products}>
            {vegetableContentUnavailable}
         </div>
      </div>
   )
}

export default Products
