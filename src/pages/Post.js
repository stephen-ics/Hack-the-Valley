import React from 'react'
import { useState } from 'react'

const Post = () => {

  const onSubmit = () => {

  }

  const [showCertifications, setShowCertifications] = useState('');

  return (
    <div className="flex flex-col">
      <label className='text-4xl text-center font-bold'>
        Input Type:
        <select className='text-center text-4xl'>
          <option value="grapefruit" onSelect={() => setOption('emergency')}>Emergency</option>
          <option value="lime" onSelect={() => setOption('recordsy')}>Records</option>
          <option value="coconut" onSelect={() => setOption('certifications')}>Certifications</option>
        </select>
      </label>

      {option &&
        <h1 className="text-4xl font-bold text-center mt-8 text-gray-700">Submit a Certificate</h1>
        <form
            className="flex flex-col gap-2 self-center mt-4 w-full p-16 pt-4 xl:w-5/6"
            onSubmit={onSubmit}
        >
          <fieldset className="flex flex-col">
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
          <fieldset className="flex flex-col">
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
          <fieldset className="flex flex-col">
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
      }
  </div>
  )
}

export default Post