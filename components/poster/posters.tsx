import svg from '@/public/svgs/Ecommerce web page-pana.svg'
import Image from 'next/image'

export const PosterOne = () => {
    return (
        <div className="bg-secondary-500 flex p-16 gap-8">
            <div>
                <Image src={svg} alt="poster_one" width={450} />
            </div>
            <div className="px-12 flex flex-col justify-center">
                <h1 className="text-primary text-[70px] font-bold">Market Space</h1>
                <p className="text-[24px] font-bold -mt-4">Where Desire meets Satisfaction</p>
                <p className="text-[18px]">Visit countless stores in your location and get your products at your doorsteps.<br /> No Stress, No Hassle</p>
                <button className="px-8 py-4 bg-primary rounded-xl text-white mt-8 w-[150px]">Shop Now</button>
            </div>
        </div>
    )
}