import { CreditCardIcon, CurrencyDollarIcon, TruckIcon, UserIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Offers = () => {
  return (
    <div className="my-6 md:mx-4 flex justify-center">
      <div className="w-[100%] flex max-lg:flex-col items-center justify-center gap-2">
        <div className="offers-box">
            <div className="offers">
                <div className="icons-bg">
                    <TruckIcon  className="icons-small text-primary" />
                </div>
                <div>
                    <p className="font-bold text-[18px] text-primary">Free Delivery</p>
                    <p className="text-[15px]">Free shipping on all order</p>
                </div>
            </div>
            <div className="offers">
                <div className="icons-bg">
                    <UserIcon className="icons-small text-primary"  />
                </div>
                <div>
                    <p className="font-bold text-[18px] text-primary">Online Support 24/7</p>
                    <p className="text-[15px]">Support online 24 hrs/day</p>
                </div>
            </div>
        </div>
        <div className="offers-box">
            <div className="offers">
                <div className="icons-bg">
                    <CreditCardIcon  className="icons-small text-primary" />
                </div>
                <div>
                    <p className="font-bold text-[18px] text-primary">Money Return</p>
                    <p className="text-[15px]">Back guarantee under 7 days</p>
                </div>
            </div>
            <div className="offers">
                <div className="icons-bg">
                    <CurrencyDollarIcon  className="icons-small text-primary" />
                </div>
                <div>
                    <p className="font-bold text-[18px] text-primary">Member Discount</p>
                    <p className="text-[15px]">On every order over 10%</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
