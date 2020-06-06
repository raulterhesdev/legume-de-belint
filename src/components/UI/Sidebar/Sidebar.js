import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import classes from './Sidebar.module.css'


import MenuItem from '../../Menu/MenuItem/MenuItem'
import Backdrop from '../Backdrop/Backdrop'
import DangerButton from '../DangerButton/DangerButton'

import {toggleSidebar, logout} from '../../../store/actions/adminActions'

const Sidebar = (props) => {
   const dispatch = useDispatch()

   const sidebarOpen = useSelector(state => state.admin.sidebarOpen)
   let sidebarClasses = classes.Sidebar
   if(sidebarOpen){
      sidebarClasses = sidebarClasses + ' ' + classes.Open
   } else {
      sidebarClasses = sidebarClasses + ' ' + classes.Closed
   }

   const isLoggedIn = useSelector(state => state.admin.isLoggedIn)

   let numberOfProducts = 0;
   const order = useSelector(state => state.items.order)
   for (const key in order) {
      if (order.hasOwnProperty(key)) {
         const quantity = order[key]
         numberOfProducts+=quantity
      }
   }

   const closeSidebar = () => {
      dispatch(toggleSidebar())
   }

   return (
      <React.Fragment>
         <Backdrop show={sidebarOpen} clicked={closeSidebar}/>
         <div className={sidebarClasses}>
            <div className={classes.MenuGroup}>
               <p className={classes.Close} onClick={closeSidebar}>X</p>
               <MenuItem  link="/" exact>Acasa</MenuItem>
               <MenuItem  link="/magazin">Legume</MenuItem>
               {isLoggedIn ? <MenuItem  link="/admin">Admin</MenuItem> : null}
               {isLoggedIn ? <div className={classes.Buttons}>
                  <DangerButton onClick={() => dispatch(logout())}>
                        Logout
                  </DangerButton>
               </div> : null}
            </div>
               <MenuItem  link="/cos" last>
               <span>Cos</span>
               <i className="fas fa-shopping-cart"></i>
               <span className={classes.Badge} >{numberOfProducts}</span>
               </MenuItem>
         </div>
      </React.Fragment>
   )
}

export default Sidebar
