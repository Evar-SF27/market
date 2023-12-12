'use client'

import { useState } from 'react'

const AddReview = () => {
  const [rating, setRating] = useState()
  const [review, setReview] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  return (
    <div>
      <form>
        <div>
          <label>Your Rating</label>
          <input />
        </div>
        <div>
        <label>Review</label>
          <input type='text' className='h-8 w-[90%] lg:w-[70%]' />
        </div>
        <div className='flex flex-col md:flex-row'>
          <div>
            <label>Name</label>
            <input type='text' className='h-6 w-[90%] md:w-[50%]' />
          </div>
          <div>
            <label>Email</label>
            <input type='text' className='h-6 w-[90%] md:w-[50%]' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddReview
