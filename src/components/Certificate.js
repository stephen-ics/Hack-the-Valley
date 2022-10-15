import React from 'react'
import Health from '../images/health.jpeg'

const Certificate = ({ title, date, location}) => {
  return (
    <div className='bg-blue-200 w-96 h-96 flex flex-col items-center justify-evenly'>
        <div className='flex flex-col h-2/3 justify-evenly'>
            <img className='rounded-xl' src='../images/health.jpeg' />
            <h1 className='text-3xl'>Title</h1>
            <h1 className='text-3xl'>Date</h1>
            <h1 className='text-3xl'>Location</h1>
        </div>

    </div>
  )
}

export default Certificate