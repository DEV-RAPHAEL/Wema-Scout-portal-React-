import React from 'react'

const Step2 = ({FormData,setFormData}) => {
  return (
    <div className='step2'>
       <input type='text'
        placeholder='Residential Address'
        value={FormData.address} onChange={(e) => setFormData({...FormData, address: e.target.value}) }

        />
      <input type='phone' placeholder='Phone Number'
        value={FormData.phone} onChange={(e) => setFormData({...FormData, phone: e.target.value}) }

      />
      <input type='phone' maxLength={10} minLength={10} placeholder='Agent Number'
      value={FormData.agent} onChange={(e) => setFormData({...FormData, agent: e.target.value}) }

      />
      <input type='date' placeholder='Date of Birth'
      value={FormData.dob} onChange={(e) => setFormData({...FormData, dob: e.target.value}) }

      />
    </div>
  )
}

export default Step2