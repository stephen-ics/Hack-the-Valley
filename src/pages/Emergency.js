import React from 'react'
import Health from '../images/deso.png'

const Emergency = () => {
  return (
    <div className='flex flex-wrap justify-between mt-20 mx-40 py-24 px-20 rounded-xl bg-red-300 border-solid border-4 border-red-900 shadow-2xl'>
      <div className='flex flex-col'>
        <div className='flex justify-between flex-wrap'>
          <div className='flex flex-col mr-12'>
            <h1 className='text-4xl'><b>Name</b>: John Smith</h1>
            <h1 className='text-2xl my-2'><b>Age</b>: 11/23/2005</h1>
            <h1 className='text-2xl mt-2'><b>Sex</b>: Male</h1>
          </div>
        </div>
        <div className='flex flex-wrap text-center m-4 mt-12'>
          <h1 className='w-80 h-48 bg-white mx-2 pt-4 border-red-900 border-solid border-2 text-xl'>Chronic Illnesses</h1>
          <h1 className='w-80 h-48 bg-white mx-2 pt-4 border-red-900 border-solid border-2 text-xl'>Recent History</h1>
        </div>
      </div>
      <div className='flex flex-col h-96 justify-between mx-6'>
        <h1 className='w-80 h-64 text-white bg-red-500 py-4 px-6 text-center border-2xl border-red-900 border-solid border-2 text-xl'>Emergency Contact</h1>
        <h1 className='w-80 h-64 bg-white py-4 px-6 text-center my-3 border-2xl border-red-900 border-solid border-2 text-xl'>Allergies</h1>
        <h1 className='w-80 h-64 bg-white py-4 px-6 text-center my-3 border-2xl border-red-900 border-solid border-2 text-xl'>Current Medication</h1>
      </div>
    </div>
  )
}

export default Emergency