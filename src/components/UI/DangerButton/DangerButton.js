import React from 'react'

import classes from './DangerButton.module.css'

const DangerButton = props => {
   return (
      <button 
         className={classes.DangerButton}
         onClick = {props.onClick}
         >
            {props.children}
      </button>
   )
}


export default DangerButton
