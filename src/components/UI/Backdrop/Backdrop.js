import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
   const additionalClass = props.transparent ? classes.Transparent : classes.Blurred
   return (
      props.show ? <div 
   className={classes.Backdrop + ' ' + additionalClass} 
   onClick={props.clicked}></div> : null
)};

export default backdrop;