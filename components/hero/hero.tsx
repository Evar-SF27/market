import React from 'react'

const Hero = () => {
  return (
    <div className="flex max-lg:flex-col gap-2 mt-1">
      <div className="lg:w-[60%] w-[100%] max-lg:h-[400px] bg-[#de3454]">
        <div className="flex py-12 px-8">
            <div className="flex-1">
                Section One Description
                <p></p>
                <h3></h3>
                <p></p>
                <button>Shop Now</button>
            </div>
            <div className="flex-1">Section Two Description</div>
        </div>
      </div>
      <div className="lg:w-[40%] flex lg:flex-col gap-2 max-sm:flex-col">
        <div className="bg-[#568756] lg:h-[50%] max-lg:h-[200px] max-lg:w-[50%] max-sm:w-[100%]">
            Section Two
        </div>
        <div className="bg-[#568756] lg:h-[50%] max-lg:h-[200px] max-lg:w-[50%] max-sm:w-[100%]">
            Section Three
        </div>
      </div>
    </div>
  )
}

export default Hero
