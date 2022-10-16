import React from 'react'
import {useRef} from 'react'
import Health from '../images/health.jpeg'
import {useInView} from 'framer-motion'

const RecordSection = ({ title, date, expiry, location, img }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
      <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
    
    <div className='flex justify-center px-40 py-6 pb-8 bg-red-300 border-red-300 border-2 b-solid my-8 rounded-xl shadow-2xl'>
        <div className='mt-4 flex flex-col justify-evenly'>
            <div>
                <h1 className='text-3xl ml-10 text-black pb-5 pr-8'><b>{title}</b></h1>
                <div className='flex'>
                    <h1 className='text-2xl ml-10 mr-10 font-medium'>Date: {date}</h1>
                    <h1 className='ml-10 mr-8 text-2xl font-medium'>Expiry Date: {expiry}</h1>
                </div>
            </div>
            <h1 className='ml-10 text-2xl font-medium mt-2'>{location}</h1>
        </div>
    </div>
    </span>
    </section>
  )
}

export default RecordSection