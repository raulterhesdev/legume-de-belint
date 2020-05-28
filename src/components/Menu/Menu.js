import React from 'react'
import {useSelector} from 'react-redux'

import classes from './Menu.module.css'

import MenuItem from './MenuItem/MenuItem'

const Menu = (props) => {
   let numberOfProducts = 0;
   const order = useSelector(state => state.items.order)
   for (const key in order) {
      if (order.hasOwnProperty(key)) {
         const quantity = order[key]
         numberOfProducts+=quantity
      }
   }

   return (
      <div className={classes.Menu}>
         <div className={classes.MenuGroup}>
            <MenuItem  link="/" exact>Acasa</MenuItem>
            <MenuItem  link="/magazin">Legume</MenuItem>
         </div>
         <MenuItem  link="/cos" last>
            <span>Cos</span>
            <i className="fas fa-shopping-cart"></i>
            <span className={classes.Badge}>{numberOfProducts}</span>
            </MenuItem>
      </div>
   )
}

export default Menu
