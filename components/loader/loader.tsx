import React from 'react'
import './styles/index.css'

const Loader = () => {
  return (
    <div className='bg-secondary-800'>
      <div className='flex gap-4 w-[100%] min-h-screen justify-center items-center child'>
        <div className='spinner'></div>
        <div className='spinner max-md:hidden'></div>
        <div className='spinner max-md:hidden'></div>
      </div>
    </div>
    
  )
}

export default Loader
