import React from 'react'

const EmergencyItem = ({ name, risk }) => {
  return (
    <div>
        <h1>Condition: {name}</h1>
        <h1>Risk: {risk}</h1>
    </div>
  )
}

export default EmergencyItem