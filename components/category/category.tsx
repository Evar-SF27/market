import Image from "next/image"

const Category = () => {
    const categories = [
        
    ]
  return (
    <div className="my-8 w-[100%]">
      <div className="w-[100%] text-primary col-flex">
        <div>
            <h1 className="font-bold text-[46px] max-sm:text-[40px]">Top Categories</h1>
        </div>
        <div className="w-[90%] flex-wrap gap-4 my-8 flex justify-around max-sm:mx-2">
            <div className="col-flex">
                <div className="row-flex category-bg">
                    <Image 
                        src="/images/laptops.png"
                        alt="category-one"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="my-4 row-flex">
                    <h3 className="text-slate-900 font-sans text-[18px] max-sm:text-[14px] max-sm:font-semibold">Category One</h3>
                </div>
            </div>
            <div className="col-flex">
                <div className="row-flex category-bg">
                    <Image 
                        src="/images/laptops.png"
                        alt="category-one"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="my-4 row-flex">
                    <h3 className="text-slate-900 font-sans text-[18px] max-sm:text-[14px] max-sm:font-semibold">Category Two</h3>
                </div>
            </div>
            <div className="col-flex">
                <div className="row-flex category-bg">
                    <Image 
                        src="/images/laptops.png"
                        alt="category-one"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="my-4 row-flex">
                    <h3 className="text-slate-900 font-sans text-[18px] max-sm:text-[14px] max-sm:font-semibold">Category Three</h3>
                </div>
            </div>
            <div className="col-flex">
                <div className="row-flex category-bg">
                    <Image 
                        src="/images/laptops.png"
                        alt="category-one"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="my-4 row-flex">
                    <h3 className="text-slate-900 font-sans text-[18px] max-sm:text-[14px] max-sm:font-semibold">Category Four</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
