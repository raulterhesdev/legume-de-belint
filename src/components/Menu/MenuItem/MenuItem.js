import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './MenuItem.module.css'

const MenuItem = (props) => {
   return (
      <div className={props.last ? classes.MenuShop : null}>
         <NavLink 
            to={props.link}
            exact={props.exact}
            style={{transition: "all 0.2s ease-out"}}
            className={classes.MenuLink}
            activeClassName={classes.ActiveLink}>{props.children}</NavLink>
      </div>
   )
}

export default MenuItem
