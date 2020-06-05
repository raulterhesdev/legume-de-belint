import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import FileUploader from "react-firebase-file-uploader";

import firebase from '../../../../../firebase'

import classes from '../../../../UI/Input/Input'

import Input from '../../../../UI/Input/Input'
import PrimaryButton from '../../../../UI/PrimaryButton/PrimaryButton'
import Select from '../../../../UI/Select/Select'

import * as adminActions from '../../../../../store/actions/adminActions'
import * as itemsActions from '../../../../../store/actions/itemsActions'

const EditProduct = ({editItem,...props}) => {
   const dispatch = useDispatch();

   const [error, setError] = useState(null)
   const [title, setTitle] = useState('')
   const [price, setPrice] = useState(0)
   const [imageAlt, setImageAlt] = useState('')
   const [unit, setUnit] = useState('Legatura')
   const [imageUrl, setImageUrl] = useState()
   const [isUploading, setIsUploading] = useState(false)
   const [progress, setProgress] = useState(0)
   const [enabled, setEnabled] = useState(true)

   useEffect(() => {
      if(editItem){
         setTitle(editItem.title)
         setPrice(editItem.price)
         setImageAlt(editItem.imageAlt)
         setImageUrl(editItem.imageUrl)
         setUnit(editItem.unit)
         setEnabled(editItem.enabled)
      }
      else {
         setTitle('')
         setPrice(0)
         setImageAlt('')
         setImageUrl()
         setUnit('Legatura')
         setEnabled(true)
      }
   }, [editItem, setTitle, setPrice,setImageAlt, setImageUrl, setUnit, setEnabled])

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
         default:
            break
      }
   }

   const handleUploadStart = () => {
      setImageUrl()
      setIsUploading(true)
      setProgress(0)
      setError()
   }
   const handleProgress = progress => {
      setProgress(progress)
   }
   const handleUploadError = error => {
      setIsUploading(false)
      setError(error)
   }
   const handleUploadSuccess = file => {
      firebase
      .storage()
      .ref("images")
      .child(file)
      .getDownloadURL()
      .then(url => setImageUrl(url));
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

      if(imageUrl) {
         const item = {title, price, unit, imageAlt, imageUrl, enabled}
         if(!validatorMessage){
            if(!editItem){
               dispatch(itemsActions.addProductData(item))
            }else{
               dispatch(itemsActions.editProductData(item, editItem.id))
            }
            props.setShowModal(false)
            setError(null)
            setTitle('')
            setPrice(0)
            setImageAlt('')
            setUnit('Legatura')
            setImageUrl()
            setIsUploading(false)
            setProgress(0)
            setEnabled(true)
         }
      }

   }

   const selectValues = ["Bucata", "Legatura", "Kg"] 

   const disableHandler = () => {
      setEnabled(previous => !previous)
   }

   const deleteHandler = () => {
      props.setShowModal(false)
      dispatch(itemsActions.deleteProductData(editItem.id))
   }

   return (
      <div>
         {editItem ? <div>
            <PrimaryButton onClick={disableHandler}>
               {enabled ? 'Disable' : 'Enable'}
            </PrimaryButton>
            <PrimaryButton onClick={deleteHandler}>
               Delete
            </PrimaryButton>
         </div> :
         null}
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
         <FileUploader
            accept="image/*"
            name="vegetable"
            // randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
            // as={compoennt}
         />
         {isUploading && <p>{progress != 100 ? `Uploading: ${progress}%` : !imageUrl ? "Image Uploaded. Getting image url. Please wait" : 'Image Uploaded'}</p>}
         <p>{error}</p>
         <PrimaryButton onClick={buttonPressedHandler} disabled={imageUrl ? false : true}>
            {editItem ? "Editeaza Produsul" : "Adauga Produsul"}
         </PrimaryButton>
      </div>
   )
}

export default EditProduct
