"use client"

import './styles/index.css'
import Image from 'next/image'
import { ShoppingBagIcon } from '@heroicons/react/20/solid'

const Hero = () => {
    
  return (
    <div className="flex max-sm:flex-col gap-1 w-full transition-all duration-1000">
        <div className="flex items-center w-[100%] h-[550px] bg-secondary-500">
            <div className="flex max-sm:flex-col h-[100%] py-10 px-4 lg:px-8 items-center">
                <div className="flex flex-1 flex-col max-lg:pl-2 pl-8 justify-center">
                    <p className="text-primary font-semibold uppercase text-[16px] lg:text-[18px]">
                        Summer sale up to 70%
                    </p>
                    <h3 className="font-bold text-[26px] lg:text-[42px]">
                        Apple Watch Series 8 <br />[GPS 45mm] Smart Watch
                    </h3>
                    <p className="lg:text-[20px] text-[26px]">
                        Gold Aluminum Case with Midnight Sport Band.
                        Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant
                    </p>
                    <button className="flex justify-around items-center mt-[30px] bg-primary w-[170px] py-4 px-[14px] hover:bg-primary-900 text-white sm:text-[22px] font-semibold rounded-[10px]">
                        Shop Now
                        <ShoppingBagIcon className="icons-small font-bold" />
                    </button>
                </div>
                <div className="flex flex-1 justify-center h-[100%]">
                    <Image 
                        src="/images/watch.png"
                        alt="Apple Smart Watch"
                        width={330}
                        height={200}
                        className="object-contain"
                    />
                </div>
            </div>   
        </div>
        <div className="max-md:w-[100%] w-[30%] flex gap-1 flex-col lg:mr-1">
            <div className="bg-secondary-700 h-[150px] w-[100%]">
                <div className="flex max-sm:flex-col py-2 px-2">
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
            <div className="bg-secondary-600 h-[180px] w-[100%]">
                <div className="flex max-sm:flex-col py-4 px-2 items-center">
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
            <div className="bg-secondary-600 h-[212px] w-[100%]">
                <div className="flex max-sm:flex-col py-4 px-2 items-center">
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
