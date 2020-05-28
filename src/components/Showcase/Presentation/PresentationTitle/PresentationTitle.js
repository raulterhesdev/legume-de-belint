import React from 'react'

import classes from './PresentationTitle.module.css'

const PresentationTitle = (props) => {
   return (
      <h1 className={classes.PresentationTitle}>
         {props.children}
      </h1>
   )
}

export default PresentationTitle
