import React from 'react'
import './styles/index.css'

const Loader = () => {
  return (
    <div className='flex flex-col w-[100%] min-h-screen justify-center items-center bg-secondary-100'>
      <div className='dots'></div>
    </div>
  )
}

export default Loader
