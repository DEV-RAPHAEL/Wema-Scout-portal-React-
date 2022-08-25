import React from 'react'

const Step2 = () => {
  return (
    <div className='step2'>
       <input type='text' placeholder='Residential Address'/>
      <input type='phone' placeholder='Phone Number'/>
      <input type='phone' maxLength={10} minLength={10} placeholder='Agent Number'/>
    </div>
  )
}

export default Step2