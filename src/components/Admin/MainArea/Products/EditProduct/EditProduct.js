import React, { useState, useEffect } from 'react'

import classes from '../../../../UI/Input/Input'

import Input from '../../../../UI/Input/Input'
import PrimaryButton from '../../../../UI/PrimaryButton/PrimaryButton'
import Select from '../../../../UI/Select/Select'

const EditProduct = ({editItem,...props}) => {
   const [error, setError] = useState(null)
   const [title, setTitle] = useState('')
   const [price, setPrice] = useState(0)
   const [imageAlt, setImageAlt] = useState('')

   useEffect(() => {
      if(editItem){
         setTitle(editItem.title)
         setPrice(editItem.price)
         setImageAlt(editItem.imageAlt)
      }
      else {
         setTitle('')
         setPrice(0)
         setImageAlt('')
      }
   }, [editItem, setTitle, setPrice])

   const inputKeys = {
      title: 'title',
      price: 'price'
   }

   const errorMsgRo = {
      title: "Titlul este obligatoriu",
      price: "Pretul nu poate fi 0"
   }

   
   const inputChangeHandler = (value, type) => {
      switch (type) {
         case inputKeys.title:
            setTitle(value)
            setImageAlt(value)
            break
         case inputKeys.price:
            setPrice(value)
            break
         default:
            break
      }
   }

   const inputValidation = () => {
      var validate = require("validate.js");
      var constraints = {
         title: {
            presence: {
               allowEmpty: false,
            }
         },
         price: {
            numericality: {
               greaterThan: 0
            }
         }
      }
   
      const validatorMsg = validate({title, price}, constraints)
      
      return validatorMsg;
   }

   const buttonPressedHandler = () => {
      const validatorMessage = inputValidation();
      let errorString = '';
      for (const key in validatorMessage) {
         if (validatorMessage.hasOwnProperty(key)) {
            errorString = `${errorString}
            ${errorMsgRo[key]}. `
         }
      }
      setError(errorString)

      // const orderContact = {name, surname, email, phone, address}

      // if(!validatorMessage){
      //    props.orderPlaced(orderContact)
      // }
   }

   console.log(editItem)
   return (
      <div>
         <Input 
            id="title"
            type="text"
            placeholder="Titlu"
            value={title}
            onChange={inputChangeHandler}
            />
         <Input 
            id="price"
            type="number"
            //placeholder="Titlu"
            value={price}
            onChange={inputChangeHandler}
            />
         
         <p>{error}</p>
         <PrimaryButton onClick={buttonPressedHandler}>
            {editItem ? "Editeaza Produsul" : "Adauga Produsul"}
         </PrimaryButton>
      </div>
   )
}

export default EditProduct
