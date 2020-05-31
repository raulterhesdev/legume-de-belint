import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import classes from './Products.module.css'

import Modal from '../../../UI/Modal/Modal'
import ShopItem from '../../../Shop/ShopItem/ShopItem'
import EditProduct from './EditProduct/EditProduct'
import PrimaryButton from '../../../UI/PrimaryButton/PrimaryButton'




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

   const vegetables = useSelector(state => state.items.products)


   let vegetableContent = vegetables.map(key => {
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
            buttonText="Editeaza"
            onAddToCart={() => openModal(key)}
            />
      )
   })

   return (
      <div>
         <Modal show={showModal} modalClosed={closeModalHandler}>
            <EditProduct editItem={editItem}/>
         </Modal>
         <PrimaryButton onClick={() => openModal()}>
            Adauga Produs
         </PrimaryButton>
         <div className={classes.Products}>
            {vegetableContent}
         </div>
      </div>
   )
}

export default Products
