import React from 'react'

import classes from './Header.module.css'

import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'

const Header = (props) => {
   return (
      <div className={classes.Header}>
         <Logo logoText = "Legume De Belint" />
         <Menu />
      </div>
   )
}

export default Header