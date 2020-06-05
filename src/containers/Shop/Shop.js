import React, { useState , useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Spring} from 'react-spring/renderprops'

import classes from './Shop.module.css'

import ShopItem from '../../components/Shop/ShopItem/ShopItem'
import Modal from '../../components/UI/Modal/Modal'

import * as itemsActions from '../../store/actions/itemsActions'

const Shop = (props) => {
   const dispatch = useDispatch()
   
   const [showModal, setShowModal] = useState(false)
   
   const addToCartHandler = (id) => {
      setShowModal(true)
      dispatch(itemsActions.addToCart(id))
      setTimeout(() => {
         setShowModal(false)
      }, 1500);
   }

   const closeModalHandler = () => {
      setShowModal(false)
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
               enabled={key.enabled}
               disabledText="Indisponibil"
               buttonText="Adauga in Cos"
               onAddToCart={addToCartHandler}
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
               enabled={key.enabled}
               disabledText="Indisponibil"
               buttonText="Adauga in Cos"
               onAddToCart={addToCartHandler}
               />
         )
      })
   }


   return (
      <React.Fragment>
         <Modal show={showModal} modalClosed={closeModalHandler} transparentBackdrop>
            <p className={classes.ModalText}>Produs adaugat in cos</p>
         </Modal>
         <div className={classes.container}>
         <Spring
            from={{ opacity: 0 ,
               transform: 'translate3d(0,-40px,0)',}}
            to={{ opacity: 1,
               transform:'translate3d(0,0px,0)', }}
            config={{duration: 600}}
            >
         {styles => (
               <div className={classes.Shop} style={styles}>
                  {vegetableContentAvailable}
               </div>
            )
         }
         </Spring>
         <p className={classes.Title}>Produse indisponibile momentan</p>
         <Spring
            from={{ opacity: 0 ,
               transform: 'translate3d(0,-40px,0)',}}
            to={{ opacity: 1,
               transform:'translate3d(0,0px,0)', }}
            config={{duration: 600}}
            >
         {styles => (
               <div className={classes.Shop} style={styles}>
                  {vegetableContentUnavailable}
               </div>
            )
         }
         </Spring>
         </div>
      </React.Fragment>
   )
}

export default Shop
