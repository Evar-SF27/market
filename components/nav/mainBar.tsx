import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/20/solid"
import { SearchBar } from ".."

const MainBar = () => {
  return (
    <div className="sm:mx-4 mx-2 h-20 border-b flex items-center justify-between">
        <div className="flex justify-between w-[70%]">
            <div className="w-[90px] sm:w-[180px]">
                <h1 className="sm:text-[35px] text-[24px] font-semibold h-[55px] flex items-center">
                    Market
                </h1>
            </div>
            <div className="flex-start">
                <SearchBar />
            </div>
        </div>
        <div className="w-[200px] flex justify-around mr-2">
            <div className="flex">
                <button>
                    <UserIcon className="text-secondary-900 icons-medium" />
                </button>
                <div className="mt-[20px]">
                    <p className="text-sm">Hello</p>
                    <p className="text-sm font-bold">Sign In</p>
                </div>
            </div>
            <button className="mb-6">
                <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full top-4 left-4">
                    20
                </div>
                <HeartIcon className="text-secondary-900 icons-medium" />
            </button>
            <button className="mb-6">
                <div className="relative inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full top-4 left-4">
                    20
                </div>
                <ShoppingCartIcon className="text-secondary-900 icons-medium" />
            </button>
        </div>
    </div>
  )
}

export default MainBar


