import React from 'react'
import EmergencyItem from '../components/EmergencyItem'

const EmergencySection = ({ name, age, sex, }) => {
  return (
    <div className='flex flex-col text-3xl text-slate-800'>
      <h1 className='text-4xl text-center font-bold text-red-900 mt-12 mb-12'>Emergency Info</h1>
      <div className='pl-64 py-20 mx-20 bg-red-200 border-4 border-red-300 border-solid rounded-xl shadow-xl'>
        <h1>Name</h1>
        <h1>Age</h1>
        <h1>Sex</h1>
        <div className='mt-8'>
          <EmergencyItem name='condition' risk='high'/>
          <EmergencyItem name='condition' risk='high'/>
          <EmergencyItem name='condition' risk='medium'/>
          <EmergencyItem name='condition' risk='low'/>
        </div>
      </div>
    </div>
  )
}

export default EmergencySection