import React from 'react'

const FinalInfo = () => {
  return (
    <div className='final'>
      <input type='text' placeholder='USSD Enrolment (Please Type True)'/>
      <input type='email' placeholder='Enter Email Address'/>
      <input type='text' placeholder='Sub Agent'/>
      <input type='phone' placeholder='BVN'/>
      {/* <input type='phone' placeholder='Card Variant'/> */}

    </div>
  )
}

export default FinalInfo