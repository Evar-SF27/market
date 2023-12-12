'use client'

import React, { useState } from 'react'
import Avatar from '../reusables/avatar'
import { StarIcon } from '@heroicons/react/20/solid'
import { Rating } from 'react-simple-star-rating'

const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+"
  ];
  const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045"
  ];
  
  const customIcons = [
    {
      icon: <StarIcon className='w-[30px]' />
    },
    {
      icon: <StarIcon className='w-[30px]' />
    },
    {
      icon: <StarIcon className='w-[30px]' />
    },
    {
      icon: <StarIcon className='w-[30px]' />
    },
    {
      icon: <StarIcon className='w-[30px]' />
    }
  ];

const Reviews = () => {
    const [, setRating1] = useState(0);
  const [, setRating2] = useState(0);
  const [, setRating3] = useState(0);
  const [, setRating4] = useState(0);
  const [, setRating5] = useState(0);
  const [rating6, setRating6] = useState(0);
  const [, setRating7] = useState(0);
  const [, setRating8] = useState(0);
  const [, setRating9] = useState(0);
  const [, setRating10] = useState(0);
  const [, setRating11] = useState(0);
  const [, setRating12] = useState(0);

  const handleRating1 = (rate: number) => setRating1(rate);
  const handleRating2 = (rate: number) => setRating2(rate);
  const handleRating3 = (rate: number) => setRating3(rate);
  const handleRating4 = (rate: number) => setRating4(rate);
  const handleRating5 = (rate: number) => setRating5(rate);
  const handleRating6 = (rate: number) => setRating6(rate);
  const handleRating7 = (rate: number) => setRating7(rate);
  const handleRating8 = (rate: number) => setRating8(rate);
  const handleRating9 = (rate: number) => setRating9(rate);
  const handleRating10 = (rate: number) => setRating10(rate);
  const handleRating11 = (rate: number) => setRating11(rate);
  const handleRating12 = (rate: number) => setRating12(rate);
  return (
    <div>
        <div className='flex gap-4'>
            <Avatar str={'PU'} />
            <div>
                <div>
                    <p className='text-primary font-semibold text-[17px]'>Person Username</p>
                    <p className='-mt-2 opacity-70 font-medium text-[14px]'>username@gmail.com</p>
                </div>
                <div className='mb-4'>
                    <Rating 
                        className='text-primary flex'
                        readonly
                        fillColor='primary'
                        size={30}
                    />
                </div>
                <div>
                    <p className='text-[15px]'>
                        Here is a sample review for the following product. The product is awesome and is very much authentic.
                    </p>
                </div>
                <Rating
                    onClick={handleRating1}
                    size={50}
                    transition
                    allowFraction
                    showTooltip
                    tooltipArray={tooltipArray}
                    fillColorArray={fillColorArray}
                  />
            </div>
        </div>
        <hr className='my-4'/>
    </div>
  )
}

export default Reviews
