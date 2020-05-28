import React from 'react'

import classes from './PresentationSection.module.css'

const PresentationSection = (props) => {
   return (
      <div>
         <h3 className={classes.PresentationSubtitle}>
            {props.headerText}
         </h3>
         <p className={classes.PresentationText}>
            {props.children}
         </p>
      </div>
   )
}

export default PresentationSection
