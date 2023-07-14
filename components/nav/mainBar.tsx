import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/20/solid"
import { SearchBar } from ".."

const MainBar = () => {
  return (
    <div className="max-sm:mx-2 mx-8 h-20 flex items-center justify-between">
        <div className="flex justify-between w-[70%]">
            <div className="w-[180px] max-sm:w-[90px] mr-4">
                <h1 className="max-sm:text-[24px] text-[35px] font-semibold h-[55px] flex items-center">
                    MarketPlace
                </h1>
            </div>
            <div className="flex justify-center">
                <SearchBar otherStyles={sm:}/>
            </div>
        </div>
        <div className="sm:w-[270px] w-[170px] flex justify-around mr-2">
            <div className="flex">
                <button>
                    <UserIcon className="text-secondary-900 icons-medium" />
                </button>
                <div className="mt-[20px] hidden sm:block">
                    <p className="text-sm">Hello</p>
                    <p className="text-sm font-bold">Sign In</p>
                </div>
            </div>
            <button className="mb-6">
                <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full top-[12px] left-4">
                    20
                </div>
                <HeartIcon className="text-secondary-900 icons-medium" />
            </button>
            <div className="flex">
                <button className="mb-6">
                    <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full top-[12px] left-4">
                        20
                    </div>
                    <ShoppingCartIcon className="text-secondary-900 icons-medium" />
                </button>
                <div className="mt-[18px] ml-[15px] hidden sm:block">
                    <p className="text-[15px]">Total</p>
                    <p className="text-[18px] font-bold">$20.0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBar


