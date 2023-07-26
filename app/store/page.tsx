import { StoreForm, TopBar } from "@/components"
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"

const Store = () => {
  return (
    <>
        <TopBar />
        <div className="w-full h-[100vh]">
            <div className="w-[100%] h-fit px-4 py-8">
                <div className="bg-secondary-800 py-2 px-4 text-white text-[32px] font-extrabold font-sans flex justify-between">
                    <p>My Stores</p>
                    <HomeIcon className="icons-large" />
                </div>
            </div>
            <div className="row-flex">
                <p className="mb-12 font-bold text-[52px] text-secondary-800">You own 0 Stores!!</p>
            </div>
            <div className="row-flex">
                <button className="bg-primary text-white text-[22px] flex px-8 py-4 rounded-xl font-semibold">
                    Create New Store
                    <ChevronRightIcon className="icons-medium" />
                </button>
            </div>
            <StoreForm />
        </div>
    </>
  )
}

export default Store
