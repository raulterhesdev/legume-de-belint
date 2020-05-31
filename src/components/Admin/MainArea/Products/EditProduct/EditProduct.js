import React, { useState, useEffect } from 'react'

import classes from '../../../../UI/Input/Input'

import Input from '../../../../UI/Input/Input'
import PrimaryButton from '../../../../UI/PrimaryButton/PrimaryButton'
import Select from '../../../../UI/Select/Select'
import ImageSelector from '../../../../UI/ImageSelector/ImageSelector'

const EditProduct = ({editItem,...props}) => {
   const [error, setError] = useState(null)
   const [title, setTitle] = useState('')
   const [price, setPrice] = useState(0)
   const [imageAlt, setImageAlt] = useState('')
   const [unit, setUnit] = useState('Legatura')
   const [file, setFile] = useState()

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
      price: 'price',
      unit: 'unit',
      file: 'file'
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
         case inputKeys.unit:
            setUnit(value)
            break
         case inputKeys.file:
            setFile(value)
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

      // const editedItem = {name, surname, email, phone, address}

      // if(!validatorMessage){
      //    props.orderPlaced(orderContact)
      // }
   }

   const selectValues = ["Bucata", "Legatura", "Kg"] 

   return (
      <div>
         <Input 
            id={inputKeys.title}
            type="text"
            placeholder="Titlu"
            value={title}
            onChange={inputChangeHandler}
            />
         <Input 
            id={inputKeys.price}
            type="number"
            //placeholder="Titlu"
            value={price}
            onChange={inputChangeHandler}
            />
         <Select 
         options={selectValues} 
         value={unit} 
         onChange={inputChangeHandler}
         id={inputKeys.unit}
         />
         <ImageSelector onChange={inputChangeHandler} id={inputKeys.file}/>
         <p>{error}</p>
         <PrimaryButton onClick={buttonPressedHandler}>
            {editItem ? "Editeaza Produsul" : "Adauga Produsul"}
         </PrimaryButton>
      </div>
   )
}

export default EditProduct
