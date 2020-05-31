import React from 'react'

import classes from './MainArea.module.css'

import {sidebarRoutes} from '../../../constants/sidebarRoutes'

import Content from './Content/Content'
import Orders from './Orders/Orders'
import Products from './Products/Products'
import Stats from './Stats/Stats'

const MainArea = (props) => {
   let displayComponent;
   switch(props.match.params.content){
      case sidebarRoutes.orders.route:
         displayComponent=(<Orders />);
         break
      case sidebarRoutes.products.route:
         displayComponent=(<Products />);
         break
      case sidebarRoutes.content.route:
         displayComponent=(<Content />);
         break
      case sidebarRoutes.stats.route:
         displayComponent=(<Stats />);
         break
      default: break
   }
   return (
      <div>
         {displayComponent}
      </div>
   )
}

export  default MainArea
