import React from 'react'
import { Route } from 'react-router'

import classes from './Admin.module.css'

import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import MainArea from '../../components/Admin/MainArea/MainArea'


const Admin = (props) => {
   return (
      <div className={classes.Admin}>
         <Sidebar />
         <Route path={props.match.url + "/:content"}  exact component={MainArea}/>
      </div>
   )
}

export default Admin
