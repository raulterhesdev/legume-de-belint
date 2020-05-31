import React from 'react'
import {useSelector} from 'react-redux'
import {useSpring, animated} from 'react-spring'

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

   const fade = useSpring({
      from: {
         opacity: 0,
         transform: 'translate3d(50px,50px,0)'
      },
      to: {
         opacity: 1,
         transform: 'translate3d(0,0px,0)'
      }
   })

   return (
      <animated.div className={classes.Presentation} style={fade}>
         <PresentationTitle>
            {presentationTitle}
         </PresentationTitle>
         {presentationContent}
      </animated.div>
   )
}

export default Presentation
