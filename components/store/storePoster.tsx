"use client"

import axios from '@/config/axios'
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'

const StorePoster = () => {
  const [image, setImage] = useState("")

  const uploadImage = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const values = {
      "image": image,
  }
    try {
      const response = await axios.post(
          "api/upload/image",
          values,
          { 
              headers: { "Content-Type": "application/json" },
              withCredentials: true
          }
      )

      if (response) {
          console.log(response)
      }
  } catch (err: any) {
      console.log(err)
  }

  }
  return (
    <div className="sm:mx-4 md:flex border-b pb-8">
        <div className="flex-2">
          <Image 
            src="/images/discount.png"
            alt="Store Photo URL"
            width={200}
            height={200}
            className="bg-secondary-500 rounded-xl max-md:mx-8"
          />
          <form action="api/upload/image" method="post" encType="multipart/form-data">
            <input 
                type="file" 
                name="image" 
                placeholder="Upload Image" 
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Upload</button>
          </form>
          
          
        </div>
        <div className="flex-1 sm:mx-8 mx-4">
          <h1 className="md:text-[44px] text-[36px] font-bold text-primary">Store Name</h1>
          <div className="flex flex-col">
          <div className="flex">
            <div>
              <h3 className="text-[14px] font-semibold text-[#555555]">@store owner username</h3>
              <p className="text-[14px] text-[#555555]">Location: Malingo, Buea.</p>
              <p className="text-[14px] text-[#555555]">Tel: (XXX) XXX-XXX-XXX</p>
            </div>
            <div className="pl-[20%]">
              <p className="stats"><span>00</span>Subscribers</p>
              <p className="stats"><span>00</span>Posts</p>
              <p className="stats"><span>00</span>Products</p>
              <p className="stats"><span>00</span>Transactions</p>
              <br/>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Description</h1>
            <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum praesentium reiciendis aspernatur velit, iure commodi voluptatum atque voluptas quos in. Beatae repellat nemo nobis eius neque modi adipisci cupiditate!</p>
          </div>
          <div className="flex w-[250px] justify-between mt-4">
            <button className="flex bg-primary w-[110px] h-[50px] p-2 rounded-xl text-white justify-around items-center text-[15px]">
              <PencilIcon className="icons-x-small" />
              Edit Store
            </button>
            <button className="flex bg-primary w-[130px] h-[50px] p-2 rounded-xl text-white justify-around items-center text-[15px]">
              <TrashIcon className="icons-x-small" />
              Delete Store
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StorePoster
