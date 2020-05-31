import React, { useState } from 'react'

const ImageSelector = ({onChange,...props}) => {
   const [file, setFile] = useState()
   const [imageUrl, setImageUrl] = useState()


   const handleImageChange = (e) => {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
         setFile(file)
         setImageUrl(reader.result)
         onChange(file, props.id)
      }

      reader.readAsDataURL(file)
   }

   return (
      <div>
         <input className="fileInput" 
            type="file" 
            accept="image/*"
            onChange={(event)=>handleImageChange(event)} />
      </div>
   )
}

export default ImageSelector
