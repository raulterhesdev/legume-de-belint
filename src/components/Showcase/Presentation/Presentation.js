import React from 'react'
import {useSelector} from 'react-redux'

import classes from './Presentation.module.css'

import PresentationTitle from './PresentationTitle/PresentationTitle'
import PresentationSection from './PresentationSection/PresentationSection'

const Presentation = (props) => {
   const presentationTitle = useSelector(state => state.admin.showcaseTitle)
   const content = useSelector(state => state.admin.showcaseContent)

   let presentationContent = content.map(key => {
      return (
      <PresentationSection key={Math.random()}
         headerText={key.title}>
         {key.text}
      </PresentationSection>)
   })

   return (
      <div className={classes.Presentation}>
         <PresentationTitle>
            {presentationTitle}
         </PresentationTitle>
         {presentationContent}
      </div>
   )
}

export default Presentation
