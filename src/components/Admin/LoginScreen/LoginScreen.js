import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import firebase from '../../../firebase'

import classes from './LoginScreen.module.css'

import Input from '../../UI/Input/Input'
import PrimaryButton from '../../UI/PrimaryButton/PrimaryButton'

import * as adminActions from '../../../store/actions/adminActions'


const LoginScreen = () => {
   const dispatch = useDispatch();
   const loginError = useSelector(state => state.admin.error)

   const [error, setError] = useState(null)
   const [email, setEmail] = useState('raulterhes0013@gmail.com')
   const [password, setPassword] = useState('Greenday13dio/03')

   const inputKeys = {
      email: 'email',
      password: 'password',
   }

   const errorMsgRo = {
      email: "Emailul este obligatoriu",
      password: "Parola este obligatorie"
   }

   const inputChangeHandler = (value, type) => {
      switch (type) {
         case inputKeys.email:
            setEmail(value)
            break
         case inputKeys.password:
            setPassword(value)
            break
         default:
            break
      }
   }

   const inputValidation = () => {
      var validate = require("validate.js");
      var constraints = {
         email: {
            presence: {
               allowEmpty: false,
            }
         },
         password: {
            presence: {
               allowEmpty: false,
            }
         }
      }
      const validatorMsg = validate({email, password}, constraints)
      
      return validatorMsg;
   }

   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
         dispatch(adminActions.login())
      } else {
         dispatch(adminActions.logout())
      }
   });

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

      if(!validatorMessage){
         dispatch(adminActions.authenticate(email,password))
      }
   }



   return (
      <div className={classes.Login}>
         <p classes={classes.Error}>{error}</p>
         <p classes={classes.Error}>{loginError}</p>
         <Input 
            id={inputKeys.email}
            type="text"
            placeholder="Email"
            value={email}
            onChange={inputChangeHandler}
            />
         <Input 
            id={inputKeys.password}
            type="password"
            placeholder="Password"
            value={password}
            onChange={inputChangeHandler}
            />
         <PrimaryButton onClick={buttonPressedHandler}>
            Login
         </PrimaryButton>
      </div>
   )
}

export default LoginScreen
