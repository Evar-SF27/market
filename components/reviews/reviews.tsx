'use client'

import React, { useState } from 'react'
import Avatar from '../reusables/avatar'
import { Rating } from 'react-simple-star-rating'
import { StarIcon } from '@heroicons/react/20/solid'


const Reviews = () => {

  return (
    <div>
        <div className='flex gap-4'>
            <Avatar str={'PU'} />
            <div>
                <div>
                    <p className='text-primary font-semibold text-[17px]'>Person Username</p>
                    <p className='-mt-2 opacity-70 font-medium text-[14px]'>username@gmail.com</p>
                </div>
                <div className='flex mb-4'>
                    <StarIcon className='w-[20px] aspect-square text-primary' />
                    <StarIcon className='w-[20px] aspect-square text-primary' />
                    <StarIcon className='w-[20px] aspect-square text-primary' />
                    <StarIcon className='w-[20px] aspect-square text-secondary-700' />
                    <StarIcon className='w-[20px] aspect-square text-secondary-700' />
                </div>
                <div>
                    <p className='text-[15px]'>
                        Here is a sample review for the following product. The product is awesome and is very much authentic.
                    </p>
                </div>
                <p className='mt-4 mx-2 opacity-70 font-bold text-[10px]'>Thursday 12th March, 2023</p>
            </div>
        </div>
        <hr className='my-4'/>
    </div>
  )
}

export default Reviews
