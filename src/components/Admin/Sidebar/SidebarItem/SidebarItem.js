import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './SidebarItem.module.css'

const SidebarItem = (props) => {
   
   return (
      <NavLink 
            to={props.link}
            exact={props.exact}
            className={classes.SidebarItem}
            activeClassName={classes.ActiveLink}
            >
               {props.children}
            </NavLink>
   )
}

export default SidebarItem
