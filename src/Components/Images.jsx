import React from 'react'
import { useState } from 'react'

const Images = ({FormData, setFormData}) => {
  const [Photo, setPhoto] = useState();
  const [File, setFile] = useState();
  function handleChange(e) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className='step3'>
       <legend>Passport photograph</legend>
      <div className='photo'>
      <input type="file" onChange={handleChange} />
      <img src={Photo} />
      </div>
      <legend>Upload Signature</legend>
      <div className='photo'>
      <input type="file"  onChange={handleChange} />
      <img src={File} />

      </div>
  
    </div>
  )
}

export default Images