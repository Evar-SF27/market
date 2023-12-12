import React from 'react'

const Avatar = ({ str }: { str: String }) => {
  return (
    <div className='bg-secondary-900 h-[45px] w-[45px] aspect-square flex rounded-full justify-center mt-2 ml-2'>
        <div className='flex items-center text-white text-[16px]'>
            {str}
        </div>
    </div>
  )
}

export default Avatar
str: String