import React, { useState } from 'react'

import classes from './Input.module.css'

const Input = (props) => {
   const [active, setActive] = useState(false)

   const toggleActive = () => {
      setActive(previous => !previous)
   }

   return (
      <input 
         className={active ?  classes.InputActive : classes.Input}
         type={props.type} 
         placeholder={props.placeholder}
         value={props.value}
         onChange={(event) => {props.onChange(event.target.value,props.id)}}
         onFocus={toggleActive}
         onBlur={toggleActive}
      />
   )
}

export default Input
