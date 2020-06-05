import React from 'react'
import { useDispatch } from 'react-redux'

import classes from './Sidebar.module.css'

import {sidebarRoutes} from '../../../constants/sidebarRoutes'

import SidebarItem from './SidebarItem/SidebarItem'
import DangerButton from '../../UI/DangerButton/DangerButton'

import * as adminActions from '../../../store/actions/adminActions'



const Sidebar = (props) => {
   const dispatch = useDispatch()
   const sidebarContent = []
   for (const key in sidebarRoutes) {
      if (sidebarRoutes.hasOwnProperty(key)) {
         const route = sidebarRoutes[key];
         const item = (<SidebarItem key={route.route} link={`/admin/${route.route}`}>{route.title}</SidebarItem>)
         sidebarContent.push(item)
      }
   }
   return (
      <div className={classes.Sidebar}>
         {sidebarContent}
         <div className={classes.Buttons}>
         <DangerButton onClick={() => dispatch(adminActions.logout())}>
               Logout
         </DangerButton>
         </div>
      </div>
   )
}

export default Sidebar
