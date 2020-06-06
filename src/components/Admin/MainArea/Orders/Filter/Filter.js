import React from 'react'

import classes from './Filter.module.css'

const Filter = (props) => {

   return (
      <div className={classes.FilterContainer}>
         <p>Filtrare. Comenzi dupa data: </p>
         <input type="date" value={props.filterDate ? props.filterDate : ''} onChange={(event) => {props.setFilterDate(event.target.value)}} className={classes.Filter}/>
      </div>
   )
}

export default Filter
