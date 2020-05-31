import React from 'react'

import classes from './Sidebar.module.css'

import {sidebarRoutes} from '../../../constants/sidebarRoutes'

import SidebarItem from './SidebarItem/SidebarItem'

const Sidebar = (props) => {
   const sidebarContent = []
   for (const key in sidebarRoutes) {
      if (sidebarRoutes.hasOwnProperty(key)) {
         const route = sidebarRoutes[key];
         const item = (<SidebarItem key={route.route} link={`/admin/${route.route}`}>{route.title}</SidebarItem>)
         sidebarContent.push(item)
      }
   }
   return (
      <div>
         {sidebarContent}
      </div>
   )
}

export default Sidebar
