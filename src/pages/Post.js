import React from 'react'
import { useState } from 'react'

const Post = () => {

  const onSubmit = () => {

  }

  const [showRecords, setShowRecords] = useState(true);
  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <div className='bg-red-200 p-10'>
      <div className='flex justify-evenly mt-24 mb-24 text-white'>
        <button className='w-1/4 h-20 px-8 bg-red-800' onClick={() => {
          setShowRecords(true)
          setShowCertifications(false)}}>Records</button>
        <button className='w-1/4 h-20 px-8 bg-red-800' onClick={() => {
          setShowRecords(false) 
          setShowCertifications(true)}}>Certifications</button>
      </div>
      
    {showRecords &&  <div className="flex flex-col">
          <h1 className="text-5xl text-red-900 font-bold text-center">Submit a Record</h1>
          <form
              className="flex flex-col gap-2 self-center mt-4 w-full p-16 pt-4 xl:w-5/6"
              onSubmit={onSubmit}
          >
            <fieldset className="flex flex-col mb-10">
                <label className="label mb-2">
                    <span className="label-text">Event</span>
                </label>
                <input
                    type="text"
                    name="eventName"
                    placeholder="Event name..."
                    className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                    required
                />
            </fieldset>
            <fieldset className="flex flex-col mb-10">
                <label className="label mb-2">
                    <span className="label-text">Date</span>
                </label>
                <input
                    type="text"
                    name="recordDate"
                    placeholder="Date of record..."
                    className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                    required
                />
            </fieldset>
            <fieldset className="flex flex-col mb-10">
                <label className="label mb-2">
                    <span className="label-text">Description</span>
                </label>
                <input
                    type="text"
                    name="recordDescription"
                    placeholder="Description of record..."
                    className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                    required
                />
            </fieldset>
          
            <input
                type="submit"
                className="rounded-lg p-4 text-white bg-zinc-800 active:bg-zinc-600 transition-all duration-75 font-bold cursor-pointer"
                value="Submit"
            />
          </form>  
    </div>}

    {showCertifications &&  <div className="flex flex-col">
          <h1 className="text-5xl text-red-900 font-bold text-center">Submit a Certificate</h1>
          <form
              className="flex flex-col gap-2 self-center mt-4 w-full p-16 pt-4 xl:w-5/6"
              onSubmit={onSubmit}
          >
            <fieldset className="flex flex-col mb-10">
                <label className="label mb-2">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="certificateName"
                    placeholder="Certificate name..."
                    className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                    required
                />
            </fieldset>
            <fieldset className="flex flex-col mb-10">
                <label className="label mb-2">
                    <span className="label-text">Date</span>
                </label>
                <input
                    type="text"
                    name="certificateDate"
                    placeholder="Date Certificate Awarded..."
                    className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                    required
                />
            </fieldset>
            <fieldset className="flex flex-col mb-10">
                <label className="label mb-2">
                    <span className="label-text">Location</span>
                </label>
                <input
                    type="text"
                    name="certificatePlace"
                    placeholder="Location Certificate Awarded..."
                    className="input input-bordered transition-all duration-150 py-2 px-4 rounded-lg"
                    required
                />
            </fieldset>
          
            <input
                type="submit"
                className="rounded-lg p-4 text-white bg-zinc-800 active:bg-zinc-600 transition-all duration-75 font-bold cursor-pointer"
                value="Submit"
            />
          </form>  
    </div>}
     
  </div>
  )
}

export default Post