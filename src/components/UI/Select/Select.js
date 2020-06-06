import React from 'react'

import classes from './Select.module.css'

const Select = ({options,value,onChange,...props}) => {
   const selectOptions = []
   options.forEach(option => {
      const element = (
         <option classes={classes.SelectItem} key={option} value={option}>{option}</option>
      )
      selectOptions.push(element)
   });
   return (
      <select 
      value={value}
      className={classes.Select}
      onChange={(event) => {onChange(event.target.value,props.id)}}
      >
         {selectOptions}
      </select>
   )
}

export default Select
