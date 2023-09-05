import svg from '@/utils/svgs/ecommerce-web-page-animate.svg'
import Image from 'next/image'

export const PosterOne = () => {
    return (
        <div className="bg-secondary-100 flex p-16 gap-4">
            <div>
                <Image src={svg} alt="poster_one" width={500} />
            </div>
            <div className="px-12">
                <h1 className="text-primary text-[70px] font-bold">Market Space</h1>
                <p className="text-[24px] font-bold -mt-4">Where Desire meets Satisfaction</p>
                <p className="text-[18px]">Visit countless stores in your location and get your products at your doorsteps.<br /> No Stress, No Hassle</p>
                <button className="px-8 py-4 bg-primary rounded-xl text-white mt-8">Shop Now</button>
            </div>
        </div>
    )
}