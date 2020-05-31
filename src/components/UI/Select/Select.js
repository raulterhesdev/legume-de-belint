import React from 'react'

const Select = ({options,...props}) => {
   for (const key in options) {
      if (options.hasOwnProperty(key)) {
         const element = options[key];
         console.log(element)
      }
   }
   return (
      <select>
         <option value="grapefruit">Grapefruit</option>
         <option value="lime">Lime</option>
         <option selected value="coconut">Coconut</option>
         <option value="mango">Mango</option>
      </select>
   )
}

export default Select
