import React, { useState } from 'react'

import classes from './CartSummary.module.css'

import Input from '../../UI/Input/Input'
import PrimaryButton from '../../../components/UI/PrimaryButton/PrimaryButton'

const CartSummary = (props) => {

   const [name, setName] = useState('Raul')
   const [surname, setSurname] = useState('Terhes')
   const [email, setEmail] = useState('raul@raul.com')
   const [phone, setPhone] = useState('1234567891')
   const [address, setAddress] = useState('Adresa Nr 20')
   const [error, setError] = useState('')

   const inputKeys = {
      name: 'name',
      surname: 'surname',
      email: 'email',
      phone: 'phone',
      address: "address"
   }

   const errorMsgRo = {
      name: "Numele este obligatoriu",
      surname: "Prenumele este obligatoriu",
      email: "Email-ul nu este valid",
      address: "Adresa este obligatorie",
      phone: "Numarul de telefon nu este valid",
   }

   
   const inputChangeHandler = (value, type) => {
      switch (type) {
         case inputKeys.name:
            setName(value)
            break
         case inputKeys.surname:
            setSurname(value)
            break
         case inputKeys.email:
            setEmail(value)
            break
         case inputKeys.phone:
            setPhone(value)
            break
         case inputKeys.address:
            setAddress(value)
            break
         default:
            break
      }
   }

   const inputValidation = () => {
      var validate = require("validate.js");
      var constraints = {
         name: {
            presence: {
               allowEmpty: false,
            }
         },
         surname: {
            presence: {
               allowEmpty: false,
            }
         },
         email: {
            email: true
         },
         phone: {
            length: {
               minimum: 10,
               maximum: 12
            }
         },
         address: {
            presence: {
               allowEmpty: false,
            }
         }
      }
   
      const validatorMsg = validate({name, surname, email, phone, address}, constraints)
      
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

      const orderContact = {name, surname, email, phone, address}


      if(!validatorMessage){
         props.orderPlaced(orderContact)
      }
   }

   return (
      <div className={classes.CartSummary}>
         <div className={classes.Container}>
            <p className={classes.Title}>Date de contact:</p>
            <Input 
            id="name"
            type="text"
            placeholder="Nume"
            value={name}
            onChange={inputChangeHandler}
            />
            <Input 
            id="surname"
            type="text"
            placeholder="Prenume"
            value={surname}
            onChange={inputChangeHandler}
            />
            <Input 
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={inputChangeHandler}
            />
            <Input 
            id="phone"
            type="text"
            placeholder="Telefon"
            value={phone}
            onChange={inputChangeHandler}
            />
            <Input 
            id="address"
            type="text"
            placeholder="Adresa"
            value={address}
            onChange={inputChangeHandler}
            />
            <p className={classes.Error}>{error}</p>
         </div>
         <div className={classes.Container}>
            <p className={classes.Title}>Total Comanda:</p>
            <p className={classes.Price}>{props.totalPrice} Lei</p>
            <PrimaryButton onClick={buttonPressedHandler}
            disabled={!props.buttonAvailable}>
               Comanda Acum
            </PrimaryButton>
         </div>
      </div>
   )
}

export default CartSummary
