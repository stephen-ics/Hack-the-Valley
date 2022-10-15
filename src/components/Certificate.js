import React from 'react'
import Health from '../images/health.jpeg'

const Certificate = ({ title, date, expiry, location, img }) => {
  return (
    <div className='px-6 py-8 pb-8 bg-red-200 border-red-300 border-2 b-solid mx-24 my-8 rounded-xl shadow-2xl'>
        <img className='rounded-xl w-96 h-96 object-cover' src={img} />
       
        <div className='mt-6 flex flex-col justify-evenly'>
            <div>
                <h1 className='text-3xl'><b>{title}</b></h1>
                <div className='flex'>
                    <h1 className='text-2xl mr-10 font-medium'>Date: {date}</h1>
                    <h1 className='text-2xl font-medium'>Expiry Date: {expiry}</h1>
                </div>
            </div>
            <h1 className='text-2xl font-medium mt-12'>{location}</h1>
        </div>
    </div>

  
  )
}

export default Certificate