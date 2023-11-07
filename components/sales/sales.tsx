import Image from 'next/image'
import './styles/index.css'

const Sales = () => {
  return (
    <div className="lg:grid grid-cols-3 gap-2">
        <div className="h-[500px] max-lg:h-[400px] relative overflow-hidden">
            <Image src='/images/bg_one.jpeg' alt='background_one' width={200} height={100} className='zoom' />
        </div>
        <div className="md:flex lg:flex-col gap-2 relative overflow-hidden">
            <div className="h-[246px] md:w-[50%] lg:w-[100%]">
                <Image src='/images/bg_one.jpeg' alt='background_two' width={200} height={100} className='zoom' />
            </div>
            <div className="h-[246px] md:w-[50%] lg:w-[100%] relative overflow-hidden">
                <Image src='/images/bg_one.jpeg' alt='background_three' width={200} height={100} className='zoom' />
            </div>
        </div>
        <div className="h-[500px] max-lg:h-[400px] relative overflow-hidden">
            <Image src='/images/bg_one.jpeg' alt='background_four' width={200} height={100} className='zoom' />
        </div>
    </div>
  )
}

export default Sales
