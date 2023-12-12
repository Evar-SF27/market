import React from 'react'
import { ReviewForm, Reviews } from '..'

const Review = () => {
  return (
    <div>
      <h1 className='text-primary text-[26px] font-bold'>Product Reviews</h1>
      <Reviews />
      <ReviewForm />
    </div>
  )
}

export default Review
