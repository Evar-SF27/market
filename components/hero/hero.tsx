import { ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 mt-1">
      <div className="flex items-center w-[100%] h-fit sm:h-[500px] bg-secondary-100">
        <div className="flex max-sm:flex-col py-12 px-4 items-center">
            <div className="flex flex-col flex-1 max-lg:pl-2 pl-8 justify-center">
                <p className="text-primary font-semibold uppercase text-[16px]">
                    Summer sale up to 70%
                </p>
                <h3 className="font-bold text-[35px] lg:text-[48px]">
                    Apple Watch Series 8 [GPS 45mm] Smart Watch
                </h3>
                <p className="lg:text-[22px] text-[20px]">
                    Gold Aluminum Case with Midnight Sport Band.
                    Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant
                </p>
                <button className="flex justify-around items-center mt-[30px] bg-primary sm:w-[230px] w-[200px] py-4 px-[24px] hover:bg-primary-100 text-white sm:text-[28px] font-semibold rounded-[10px]">
                    Shop Now
                    <ShoppingBagIcon className="icons-small font-bold" />
                </button>
            </div>
            <div className="flex flex-1 justify-center">
                <Image 
                    src="/images/watch.png"
                    alt="Apple Smart Watch"
                    width={350}
                    height={300}
                    className="object-fit"
                />
            </div>
        </div>
      </div>
      <div className="w-[100%] flex gap-2 max-sm:flex-col">
        <div className="bg-secondary-500 h-[250px] max-sm:h-fit sm:w-[50%] w-[100%]">
            <div className="flex max-sm:flex-col py-4 px-4">
                <div className="flex flex-2 justify-center">
                    <Image 
                        src="/images/discount.png"
                        alt="Discount"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex flex-col flex-1 justify-center py-4 pl-4">
                    <h3 className="font-bold text-[35px]">
                        Promos  & Offers
                    </h3>
                    <p className="text-[16px] mt-2">
                        Register and Shop Now to benefit from the latest offers and exclusive offers from
                        shops in your area.
                    </p>
                    <button className="flex justify-around mt-[20px] bg-primary w-[130px] py-[10px] px-[24px] hover:bg-primary-100 text-white text-[18px] font-semibold rounded-[10px]">
                        Visit
                        <ArrowRightIcon className="icons-small" />
                    </button>
                </div>
            </div>
        </div>
        <div className="bg-secondary-800 h-[250px] max-sm:h-fit sm:w-[50%] w-[100%]">
            <div className="flex max-sm:flex-col py-4 px-4 items-center">
                <div className="flex flex-1 justify-center mt-4">
                    <Image 
                        src="/images/kitchen.png"
                        alt="Kitchen"
                        width={200}
                        height={100}
                    />
                </div>
                <div className="flex flex-col flex-1 justify-center py-6 pl-2">
                    <h3 className="text-primary font-bold uppercase text-[18px]">
                        Kitchen Appliances
                    </h3>
                    <p className="text-[20px] mt-2">
                        Complete Kitchen appliance set. Brand new and Sealed.
                    </p>
                    <div className="flex mt-4 pl-4 gap-2 text-[24px]">
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
