'use client'

import { axiosPrivate } from '@/config/axios'
import { ProductIdContext } from '@/context/products'
import { StarIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'

const AddReview = () => {
  const [review, setReview] = useState<string>()
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [numRating, setNumRating] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<String | null>()
  const product = useContext(ProductIdContext)
  console.log(product && product._id)
  const router = useRouter()

  const addReview = async () => {
    console.log({ email, numRating, product, name })
    try {
      const response = await axiosPrivate.post(
        '/reviews',
        {
          username: name,
          email: email,
          rating: numRating,
          review: review,
          product: product?._id
      })

      if(response) {
        router.back()
      }
    } catch (err: any) {
      console.error(err.message)
      if (!err?.response) {
        setErrorMessage(err.message)
      } else if (err.response?.status === 400) {
          setErrorMessage("Incomplete credentials: Username or Password is missing")
      } else if (err.response?.status === 401) {
          setErrorMessage("Unauthorised")
      } else if (err.response?.status === 404) {
          setErrorMessage("User not found")
      } else {
          setErrorMessage("Login failed")
      }
    }

  }

  return (
    <div className='border py-6 px-8 w-[100%] md:w-[700px] rounded-[15px]'>
      <div className='my-4'>
        <h1 className='text-primary text-[42px] font-bold'>Leave a Review</h1>
        <h1 className='-mt-2 text-primary text-[18px] font-semibold'>Let us Know What you think!!</h1>
      </div>
      <form onSubmit={addReview}>
        <div className={`${!errorMessage && "hidden"} bg-red-100 rounded-[5px] h-fit py-4 px-4 mb-6 text-red-500`}>
          <span className="text-red-600 font-bold">Error: </span>{errorMessage}
        </div>
        <div>
          <label className='mx-2'>Your Rating</label>
          <div className='flex mb-4'>
            {[1,2,3,4,5].map(
              (i) => <StarIcon key={i} className={`w-[40px] aspect-square ${i <= numRating ? 'text-primary' : 'text-secondary-700' }`} onClick={() => numRating != i ? setNumRating(i): setNumRating(i-1)} /> 
            )}  
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='mx-2'>Review</label>
          <textarea  
            className='w-[100%] h-[100px] input_3 py-2'
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex flex-col w-[100%] md:w-[50%] gap-2'>
            <label className='mx-2'>Name</label>
            <input
              type='text' 
              className='w-[100%] h-[50px] input_3' 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col w-[100%] md:w-[50%] gap-2'>
            <label className='mx-2'>Email</label>
            <input 
              type='text' 
              className='w-[100%] h-[50px] input_3'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button type='submit' className='bg-primary mt-8 text-white text-[20px] rounded-[10px] px-8 py-2'>Send</button>
      </form>
    </div>
  )
}

export default AddReview
