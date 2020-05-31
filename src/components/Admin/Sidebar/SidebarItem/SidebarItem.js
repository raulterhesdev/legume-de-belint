import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './SidebarItem.module.css'

const SidebarItem = (props) => {
   
   return (
      <div>
         <NavLink 
            to={props.link}
            exact={props.exact}
            // style={{transition: "all 0.2s ease-out"}}
            // className={classes.MenuLink}
            // activeClassName={classes.ActiveLink}
            >
               {props.children}
            </NavLink>
      </div>
   )
}

export default SidebarItem
