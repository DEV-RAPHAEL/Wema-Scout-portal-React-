import React from 'react'

const PersoalInfo = ({FormData, setFormData}) => {
  return (
    <div className='personalInfo'>
      <input type='text' 
      placeholder='First Name'
      value={FormData.firstName} onChange={(e) => setFormData({...FormData, firstName: e.target.value}) }
      />
      <input type='text' placeholder='Last Name'
      value={FormData.lastName} onChange={(e) => setFormData({...FormData, lastName: e.target.value}) }

      />
      <input type='text' placeholder='Middle Name'
      value={FormData.middleName} onChange={(e) => setFormData({...FormData, middleName: e.target.value}) }

      />
      <select placeholder='Gender'
      value={FormData.gender} onChange={(e) => setFormData({...FormData, gender: e.target.value}) }

      >
        <option value="">Select Gender</option>
        <option value="Male" >Male</option>
        <option value="Female" >Female</option>
      </select>
    </div>
  )
}

export default PersoalInfo