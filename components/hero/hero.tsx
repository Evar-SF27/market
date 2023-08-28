import { ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col gap-1 mt-[2px]">
      <div className="flex items-center w-[100%] h-fit sm:h-[425px] bg-secondary-100">
        <div className="flex max-sm:flex-col py-12 px-4 items-center">
            <div className="flex flex-col flex-1 max-lg:pl-2 pl-8 justify-center">
                <p className="text-primary font-semibold uppercase text-[16px]">
                    Summer sale up to 70%
                </p>
                <h3 className="font-bold text-[28px] lg:text-[42px]">
                    Apple Watch Series 8 [GPS 45mm] Smart Watch
                </h3>
                <p className="lg:text-[20px] text-[18px]">
                    Gold Aluminum Case with Midnight Sport Band.
                    Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant
                </p>
                <button className="flex justify-around items-center mt-[30px] bg-primary w-[170px] py-4 px-[14px] hover:bg-primary-900 text-white sm:text-[22px] font-semibold rounded-[10px]">
                    Shop Now
                    <ShoppingBagIcon className="icons-small font-bold" />
                </button>
            </div>
            <div className="flex flex-1 justify-center">
                <Image 
                    src="/images/watch.png"
                    alt="Apple Smart Watch"
                    width={330}
                    height={270}
                    className="object-fit"
                />
            </div>
        </div>
      </div>
      <div className="w-[100%] flex gap-1 max-md:flex-col">
        <div className="bg-secondary-500 min-h-[150px] md:w-[50%] w-[100%]">
            <div className="flex max-sm:flex-col py-2 px-4">
                <div className="flex flex-2 justify-center">
                    <Image 
                        src="/images/discount.png"
                        alt="Discount"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex flex-col flex-1 justify-center py-2 pl-4">
                    <h3 className="font-bold text-[22px]">
                        Promos  & Offers
                    </h3>
                    <p className="text-[14px] mt-2">
                        Register and Shop Now to benefit from the latest offers and exclusive offers from
                        shops in your area.
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-secondary-800 min-h-[150px] md:w-[50%] w-[100%]">
            <div className="flex max-sm:flex-col py-2 px-4 items-center">
                <div className="flex flex-1 justify-center mt-4">
                    <Image 
                        src="/images/kitchen.png"
                        alt="Kitchen"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex flex-col flex-1 justify-center py-2 pl-2">
                    <h3 className="text-primary font-bold uppercase text-[14px]">
                        Kitchen Appliances
                    </h3>
                    <p className="text-[16px] mt-2">
                        Complete Kitchen appliance set. Brand new and Sealed.
                    </p>
                    <div className="flex mt-4 pl-4 gap-2 text-[20px]">
                        <del className="font-semibold">$3600</del>
                        <p className="text-[28px] text-primary font-bold">$2100</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-secondary-800 min-h-[150px] md:w-[50%] w-[100%]">
            <div className="flex max-sm:flex-col py-2 px-4 items-center">
                <div className="flex flex-1 justify-center mt-4">
                    <Image 
                        src="/images/kitchen.png"
                        alt="Kitchen"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex flex-col flex-1 justify-center py-2 pl-2">
                    <h3 className="text-primary font-bold uppercase text-[14px]">
                        Kitchen Appliances
                    </h3>
                    <p className="text-[16px] mt-2">
                        Complete Kitchen appliance set. Brand new and Sealed.
                    </p>
                    <div className="flex mt-4 pl-2 gap-2 text-[24px]">
                        <del className="font-semibold">$3600</del>
                        <p className="text-[28px] text-primary font-bold">$2100</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
