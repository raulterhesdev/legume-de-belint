import React from 'react'

const Select = ({options,value,onChange,...props}) => {
   const selectOptions = []
   options.forEach(option => {
      const element = (
         <option key={option} value={option}>{option}</option>
      )
      selectOptions.push(element)
   });
   return (
      <select 
      value={value}
      onChange={(event) => {onChange(event.target.value,props.id)}}
      >
         {selectOptions}
      </select>
   )
}

export default Select
