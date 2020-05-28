import React from 'react'

import classes from './Footer.module.css'

const Footer = (props) => {
   return (
      <div className={classes.Footer}>
         <p className={classes.FooterText}>Copyright &copy; Legume De Belint, {new Date().getFullYear()} </p>
      </div>
   )
}

export default Footer
