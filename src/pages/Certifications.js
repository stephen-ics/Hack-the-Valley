import React from 'react'
import Certificate from '../components/Certificate'
import Health from '../images/health.jpeg'
import { useState } from 'react'

const Certifications = () => {
    const [showVaccines, setShowVaccines] = useState(true);
    const [showImmunizations, setShowImmunizations] = useState(false);
    const [showMedication, setShowMedication] = useState(false);
  
  return (
    <div className='flex flex-col justify-center text-red-900'>
         
        <div className='flex justify-evenly mt-24 mb-16 text-white'>
            <button className='w-1/4 h-20 px-8 bg-red-800 font-bold' onClick={() => {
                setShowVaccines(true)
                setShowImmunizations(false)
                setShowMedication(false)}}>Vaccines
            </button>
            <button className='w-1/4 h-20 px-8 bg-red-800 font-bold' onClick={() => {
                setShowVaccines(false)
                setShowImmunizations(true)
                setShowMedication(false)}}>Immunizations
            </button>
            <button className='w-1/4 h-20 px-8 bg-red-800 font-bold' onClick={() => {
                setShowVaccines(false)
                setShowImmunizations(false)
                setShowMedication(true)}}>Medication
            </button>
        </div>
        <div className='flex justify-center'>
            {showVaccines &&  
            <div>
                    <h1 className='text-5xl text-center font-bold'>Vaccines</h1>
                    <div className='flex flex-wrap'>
                        <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                        <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                        <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                        <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                    </div>
                </div>
            }
            {showImmunizations &&  
                <div>
                    <h1 className='text-5xl text-center font-bold'>Immunizations</h1>
                    <div className='flex flex-wrap'>
                        <Certificate title='Heptitus B' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                        <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                        <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                        <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                    </div>
                </div>
            }
            {showMedication &&  
            <div>
                <h1 className='text-5xl text-center font-bold'>Medications</h1>
                <div className='flex flex-wrap'>
                    <Certificate title='EpiPen' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                    <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                    <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                    <Certificate title='Phizer Vaccine' date='2022' expiry='2028' location='Credit Valley Hospital' img={Health}/>
                </div>
            </div>
            }
            
            
           
        </div>
    </div>
  )
}

export default Certifications