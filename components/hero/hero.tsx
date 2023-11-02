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
    <div className="flex max-lg:flex-col gap-1 w-[100%] h-fit transition-all duration-3000">
        <div className="flex items-center w-[100%] lg:w-[70%] xl:w-[77%] h-[550px] max-md:h-fit bg-secondary-500">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect='fade'
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay
                fadeEffect={{ crossFade: true }}
                className='h-[100%] w-full'
            >
                <SwiperSlide>
                    <div className="flex max-sm:flex-col w-[100%] h-[100%] py-10 px-4 xl:px-8 items-center">
                        <div className="flex md:basis-3/5 flex-col pl-8 justify-center">
                            <p className="text-primary font-semibold uppercase text-[14px] lg:text-[16px]">
                                Summer sale up to 70%
                            </p>
                            <h3 className="font-bold text-[30px] xl:text-[42px] lg:text-[38px]">
                                Apple Watch Series 8 <br />[GPS 45mm] Smart Watch
                            </h3>
                            <p className="xl:text-[26px] lg:text-[20px] text-[18px]">
                                Gold Aluminum Case with Midnight Sport Band.
                                Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant
                            </p>
                            <CustomButton text='Shop Now' icon={<ShoppingBagIcon className="icons-small font-bold" />} className='mt-[30px] w-[240px] sm:text-[22px]' />
                        </div>
                        <div className="flex md:basis-2/5 justify-center h-[100%]">
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
                    <div className="flex max-sm:flex-col w-[100%] h-[100%] py-10 px-4 xl:px-8 items-center">
                        <div className="flex md:basis-3/5 flex-col pl-8 justify-center">
                            <p className="text-primary font-semibold uppercase text-[16px] lg:text-[16px]">
                                Back-to-School Offer: Up to 50% Off
                            </p>
                            <h3 className="font-bold text-[30px] xl:text-[42px] lg:text-[38px]">
                                Dell XPS Lite 2022<br />Newest Inspiron 15 Laptop
                            </h3>
                            <p className="xl:text-[26px] text-[20px]">
                                The Ultimate Productivity Machine! Ultra-slim design, powerful Intel Core i7, 16GB RAM, 512GB SSD. 
                                Brilliant 15" 4K Display, Long-lasting Battery, and Windows 11 Ready.
                            </p>
                            <CustomButton text='Shop Now' icon={<ShoppingBagIcon className="icons-small font-bold" />} className='mt-[30px] w-[240px] sm:text-[22px]' />
                        </div>
                        <div className="flex md:basis-2/5 justify-center h-[100%]">
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
                    <div className="flex max-sm:flex-col w-[100%] h-[100%] py-10 px-4 xl:px-8 items-center">
                        <div className="flex md:basis-3/5 flex-col pl-8 justify-center">
                            <p className="text-primary font-semibold uppercase text-[16px] lg:text-[16px]">
                                Introducing the Future
                            </p>
                            <h3 className="font-bold text-[30px] xl:text-[42px] lg:text-[38px]">
                                Apple iPhone 14 Pro Max
                            </h3>
                            <p className="xl:text-[26px] text-[20px]">
                                Unleash the Power! Stunning 6.7-inch Super Retina XDR display, A16 Bionic Chip, Pro Camera System, 
                                5G Connectivity, and All-day Battery Life. Available in Multiple Colors.
                            </p>
                            <CustomButton text='Shop Now' icon={<ShoppingBagIcon className="icons-small font-bold" />} className='mt-[30px] w-[240px] sm:text-[22px]' />
                        </div>
                        <div className="flex md:basis-2/5 justify-center h-[100%]">
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
        <div className="max-lg:w-[100%] w-[30%] xl:w-[23%] flex gap-1 flex-col md:flex-row lg:flex-col lg:mr-1">
            <div className="bg-secondary-700 h-[186px] w-[100%]">
                <div className="flex py-4 px-2 pl-[10%] gap-2 items-center">
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
                            Best Deal
                        </h3>
                        <p className="text-[16px] mt-2">
                            Multipurpose Gas Cooker
                        </p>
                        <div className="flex mt-4 pl-2 gap-2 text-[24px]">
                            <del className="font-semibold">$3600</del>
                            <p className="text-[28px] text-primary font-bold">$2100</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary-700 h-[186px] w-[100%]">
                <div className="flex py-4 px-2 items-center justify-center">
                    <div className="flex basis-2/5 px-2 justify-center mt-4">
                        <Image 
                            src="/images/kitchen.png"
                            alt="Kitchen"
                            width={150}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-col basis-3/5 justify-center items-center py-2">
                        <h3 className="text-primary font-bold uppercase text-[14px]">
                            Get a discount from every kitchen appliance. Buy Now!!
                        </h3>
                        <div className="flex flex-col mt-4">
                            <p className="text-[20px] text-primary font-bold">70% off</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary-500 h-[170px] w-[100%]">
                <div className="flex py-2 justify-center items-center">
                    <div className="flex flex-col items-center justify-center py-4 px-2 w-[100%]">
                        <h3 className="flex justify-center font-bold text-[20px] opacity-80">
                            Start Selling Now!!
                        </h3>
                        <CustomButton text='Create Store' icon='' className='w-[220px] max-md:w-[200px] text-[20px] max-md:text-[18px] lg:text-[20px] mt-[20px]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
