import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import classes from './Header.module.css'

import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import Toggle from '../../components/UI/Sidebar/Toggle/Toggle'

import { toggleSidebar} from '../../store/actions/adminActions'

const Header = (props) => {
   const dispatch = useDispatch()
   const sidebarOpen = useSelector(state => state.admin.sidebarOpen)

   const openSidebar = () => {
      dispatch(toggleSidebar())
   }
   return (
      <div className={classes.Header} >
         <Logo logoText = "Legume De Belint" />
         <Menu />
         <Toggle onClick={openSidebar} sidebarOpen={sidebarOpen}/>
      </div>
   )
}

export default Header