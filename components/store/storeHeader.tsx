import { HomeModernIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'

const StoreHeader = () => {
  const router = useRouter()
  return (
    <div>
      <div className="bg-secondary-800 h-12">
        Adverts
      </div>
      <div className="bg-secondary-800 my-4 mx-4 h-16 flex items-center justify-between px-4">
        <div>
          <h1 className="text-[32px] text-white font-bold">My Store</h1>
        </div>
        <div>
          <HomeModernIcon className="icons-large text-white" onClick={() => router.push("/")}/>
        </div>
      </div>
    </div>
  )
}

export default StoreHeader
