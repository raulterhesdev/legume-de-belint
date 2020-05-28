import React from 'react'

import classes from './Logo.module.css'

const Logo = (props) => {
   return (
      <div className={classes.Logo}>
         <p>{props.logoText}</p>
      </div>
   )
}

export default Logo
