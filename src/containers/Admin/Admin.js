import React, { useState } from 'react'
import { Route } from 'react-router'
import {useSelector} from 'react-redux'

import classes from './Admin.module.css'

import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import MainArea from '../../components/Admin/MainArea/MainArea'
import LoginScreen from '../../components/Admin/LoginScreen/LoginScreen'


const Admin = (props) => {
   const isLoggedIn =  useSelector(state => state.admin.isLoggedIn)

   if(!isLoggedIn) {
      return (
         <LoginScreen />
      )
   }
   return (
      <div className={classes.Admin}>
         <Sidebar />
         <Route path={props.match.url + "/:content"}  exact component={MainArea}/>
      </div>
   )
}

export default Admin
