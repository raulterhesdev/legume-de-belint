import React from 'react'

import classes from './PrimaryButton.module.css'

const PrimaryButton = (props) => {


   return (
      <button 
      disabled={props.disabled}
      className={classes.Button} 
      onClick={props.onClick}
      >
         {props.children}
      </button>
   )
}

export default PrimaryButton
