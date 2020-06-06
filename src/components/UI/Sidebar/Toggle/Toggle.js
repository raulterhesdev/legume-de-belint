import React from 'react'

import classes from './Toggle.module.css'

const Toggle = ({sidebarOpen, ...props}) => {

   let style = classes.Toggle
   if(sidebarOpen) {
      style = classes.Toggle + ' ' + classes.Close
   }

   return (
      <div className={style} onClick={props.onClick}>
         <div></div>
         <div></div>
         <div></div>
      </div>
   )
}

export default Toggle
