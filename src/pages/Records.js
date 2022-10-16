import React from 'react'
import Certificate from '../components/Certificate'
import Health from '../images/health.jpeg'
import RecordSection from '../components/RecordSection'
import { useState, useEffect } from 'react'

const Records = () => {
    const [showVaccines, setShowVaccines] = useState(true);
    const [showImmunizations, setShowImmunizations] = useState(false);
    const [showMedication, setShowMedication] = useState(false);

    const [certificationOption, setCertificationOption] = useState("Vaccine");
    const [certificationData, setCertificationData] = useState(null);

    function buttonPressed(option){
        console.log(option)
        fetch(`http://localhost:3000/${option}Certificates`)
        .then(res => {
        return res.json();
        })
        .then(data => {
        setCertificationData(data);
        });
    };


  
  return (
    <div className='flex flex-col justify-center text-red-900'>
         
        <div className='flex justify-evenly mt-24 mb-16 text-white'>
            <button className='w-1/4 h-20 px-8 bg-red-800 font-bold' onClick={() => {
                setShowVaccines(true)
                setShowImmunizations(false)
                setShowMedication(false)
                buttonPressed("Vaccine")}}>Vaccines
            </button>
            <button className='w-1/4 h-20 px-8 bg-red-800 font-bold' onClick={() => {
                setShowVaccines(false)
                setShowImmunizations(true)
                setShowMedication(false)
                buttonPressed("Immunization")}}>Immunizations
            </button>
            <button className='w-1/4 h-20 px-8 bg-red-800 font-bold' onClick={() => {
                setShowVaccines(false)
                setShowImmunizations(false)
                setShowMedication(true)
                buttonPressed("Medication")}}>Medication
            </button>
        </div>
        <div className='flex justify-center'>
            {showVaccines &&  
            <div>
                <h1 className='text-5xl text-center font-bold'>Vaccines</h1>
                <div className='flex flex-col items-center'>
                    {certificationData && 
                    certificationData.map(certificate => (
                    <RecordSection title={certificate.title} date={certificate.date} expiry={certificate.expiry} location={certificate.location} img={certificate.image}/>
                    ))}
                </div>
                </div>
            }
            {showImmunizations &&  
            <div>
                <h1 className='text-5xl text-center font-bold'>Immunizations</h1>
                <div className='flex flex-col items-center'>
                    {certificationData && 
                    certificationData.map(certificate => (
                        <RecordSection title={certificate.title} date={certificate.date} expiry={certificate.expiry} location={certificate.location} img={certificate.image}/>
                    ))}
                </div>
                </div>
            }
            {showMedication &&  
            <div>
                <h1 className='text-5xl text-center font-bold'>Medication</h1>
                <div className='flex flex-col items-center'>
                    {certificationData && 
                    certificationData.map(certificate => (
                    <RecordSection title={certificate.title} date={certificate.date} expiry={certificate.expiry} location={certificate.location} img={certificate.image}/>
                    ))}
                </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Records