"use client"

import './styles/index.css'
import 'swiper/css/bundle'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import CustomButton from '../button/button'

const Hero = () => {
    
  return (
    <div className="flex max-sm:flex-col gap-1 w-full transition-all duration-1000">
        <div className="flex items-center md:w-[75%] h-[550px] bg-secondary-500">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect='fade'
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay
                fadeEffect={{ crossFade: true }}
            >
                <SwiperSlide>
                    <div className="flex max-sm:flex-col h-[100%] py-10 px-4 lg:px-8 items-center">
                        <div className="flex basis-3/5 flex-col max-lg:pl-2 pl-8 justify-center">
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
                            <CustomButton text='Shop Now' icon={<ShoppingBagIcon className="icons-small font-bold" />} className='mt-[30px] w-[240px] sm:text-[22px]' />
                        </div>
                        <div className="flex basis-2/5 justify-center h-[100%]">
                            <Image 
                                src="/images/watch.png"
                                alt="Apple Smart Watch"
                                width={350}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex max-sm:flex-col h-[100%] py-10 px-4 lg:px-8 items-center">
                        <div className="flex basis-3/5 flex-col max-lg:pl-2 pl-8 justify-center">
                            <p className="text-primary font-semibold uppercase text-[16px] lg:text-[18px]">
                                Back-to-School Offer: Up to 50% Off
                            </p>
                            <h3 className="font-bold text-[26px] lg:text-[42px]">
                                Dell 2022<br />Newest Inspiron 15 Laptop
                            </h3>
                            <p className="lg:text-[20px] text-[26px]">
                                The Ultimate Productivity Machine! Ultra-slim design, powerful Intel Core i7, 16GB RAM, 512GB SSD. 
                                Brilliant 15" 4K Display, Long-lasting Battery, and Windows 11 Ready.
                            </p>
                            <CustomButton text='Shop Now' icon={<ShoppingBagIcon className="icons-small font-bold" />} className='mt-[30px] w-[240px] sm:text-[22px]' />
                        </div>
                        <div className="flex basis-2/5 justify-center h-[100%]">
                            <Image 
                                src="/images/laptops.png"
                                alt="Apple Smart Watch"
                                width={350}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex max-sm:flex-col h-[100%] py-10 px-4 lg:px-8 items-center">
                        <div className="flex basis-3/5 flex-col max-lg:pl-2 pl-8 justify-center">
                            <p className="text-primary font-semibold uppercase text-[16px] lg:text-[18px]">
                                Introducing the Future: iPhone 14 Pro Max
                            </p>
                            <h3 className="font-bold text-[26px] lg:text-[42px]">
                                Apple iPhone 14 Pro Max
                            </h3>
                            <p className="lg:text-[20px] text-[26px]">
                                Unleash the Power! Stunning 6.7-inch Super Retina XDR display, A16 Bionic Chip, Pro Camera System, 
                                5G Connectivity, and All-day Battery Life. Available in Multiple Colors.
                            </p>
                            <CustomButton text='Shop Now' icon={<ShoppingBagIcon className="icons-small font-bold" />} className='mt-[30px] w-[240px] sm:text-[22px]' />
                        </div>
                        <div className="flex basis-2/5 justify-center h-[100%]">
                            <Image 
                                src="/images/i14_black.png"
                                alt="Apple Smart Watch"
                                width={310}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> 
        </div>
        <div className="max-md:w-[100%] w-[25%] flex gap-1 flex-col lg:mr-1">
            <div className="bg-secondary-500 h-[150px] w-[100%]">
                <div className="flex max-sm:flex-col py-2 px-2">
                    <div className="flex flex-2/5 justify-center">
                        <Image 
                            src="/images/discount.png"
                            alt="Discount"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col flex-3/5 justify-center py-2 pl-4">
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
            <div className="bg-secondary-700 h-[196px] w-[100%]">
                <div className="flex max-sm:flex-col py-4 px-2 items-center">
                    <div className="flex flex-2/5 justify-center mt-4">
                        <Image 
                            src="/images/kitchen.png"
                            alt="Kitchen"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col flex-3/5 justify-center py-2 pl-2">
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
            <div className="bg-secondary-700 h-[196px] w-[100%]">
                <div className="flex max-sm:flex-col py-4 px-2 items-center">
                    <div className="flex flex-2/5 justify-center mt-4">
                        <Image 
                            src="/images/kitchen.png"
                            alt="Kitchen"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col flex-3/5 justify-center py-2 pl-2">
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
