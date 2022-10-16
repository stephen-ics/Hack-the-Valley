import React from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

const Login = () => {
  return (
    <div className='absolute h-full w-full bg-red-200 flex items-center justify-center flex-col'>
      <h1 className='text-6xl text-center text-red-900 font-bold'>You have successfully logged in!</h1>
      <Link to='/'>
        <button className='text-4xl text-white rounded-xl border-2 border-solid border-red-600 py-5 px-12 bg-red-900 my-12'>Continue</button>
      </Link>
      
    </div>
  )
}

export default Login