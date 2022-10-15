import React from 'react'
import red from '../videos/Red.mp4'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Home = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1.5}}>
    <video src={red} autoPlay loop className='absolute z-30 w-auto min-w-full min-h-full max-w-none'/>

    <div className=''>
      <div className='flex flex-col justify-center items-center h-full text-center font-mono'>
        <h1 className='z-30 pt-10 px-20 text-9xl text-white bg-opacity-50 rounded-xl mt-40 pb-10'><b>HEALTH HUB</b></h1>
        <div className='z-30 mt-10 text-3xl text-white text-center py-10'>
          <Typewriter
          options={{
            strings: ['a blockchain for health data'],
            autoStart: true,
            loop: true,
          }}
  
        />
        </div>
        {/* <h1 className='z-30 mt-10 text)-3xl text-white text-center'>a blockchain for health data</h1> */}
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          className=' px-20 mt-10 rounded-xl z-30 bg-black py-8 text-white text-xl'> Get Started 
        </motion.button>
      </div>
 
    </div>
    </motion.div>
  )
}

export default Home