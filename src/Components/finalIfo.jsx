import React from 'react'

const FinalInfo = ({FormData, setFormData}) => {
  return (
    <div className='final'>
      <input type='text' disabled  placeholder='USSD Enrolment' 
      value={FormData.USSD} onChange={(e) => setFormData({...FormData, USSD: e.target.value}) }
 />
      <input type='email' placeholder='Enter Email Address'
      value={FormData.email} onChange={(e) => setFormData({...FormData, email: e.target.value}) }

      />
      <input type='text' placeholder='Sub Agent'
      value={FormData.subAgent} onChange={(e) => setFormData({...FormData, subAgent: e.target.value}) }
 
      />
      <input type='phone' placeholder='BVN'
      value={FormData.BVN} onChange={(e) => setFormData({...FormData, BVN: e.target.value}) }

      />
      {/* <input type='phone' placeholder='Card Variant'/> */}

    </div>
  )
}

export default FinalInfo