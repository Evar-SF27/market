'use client'

import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const AddReview = () => {
  const [review, setReview] = useState<string>()
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [numRating, setNumRating] = useState<number>(0)
  return (
    <div>
      <form>
        <div>
          <label>Your Rating</label>
          <div className='flex mb-4'>
            {[1,2,3,4,5].map(
              (i) => <StarIcon className={`w-[30px] aspect-square ${i <= numRating ? 'text-primary' : 'text-secondary-700' }`} onClick={() => numRating != i ? setNumRating(i): setNumRating(i-1)} /> 
            )}  
          </div>
        </div>
        <div className='flex flex-col'>
          <label>Review</label>
          <input 
            type='text' 
            className='w-[100%] lg:w-[70%] h-[100px] input_3'
            value={review}
            onChange={(e) => setReview(e.target.value)} 
          />
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col'>
            <label>Name</label>
            <input 
              type='text' 
              className='w-[100%] md:w-[50%] h-[50px] input_3' 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Email</label>
            <input 
              type='text' 
              className='w-[100%] md:w-[50%] h-[50px] input_3'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddReview
