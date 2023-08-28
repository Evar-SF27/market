const Sales = () => {
  return (
    <div className="lg:grid grid-cols-3 gap-2">
        <div className="h-[450px] bg-secondary-500 max-lg:h-[400px]">
            One
        </div>
        <div className="md:flex lg:flex-col gap-2">
            <div className="h-[221px] bg-secondary-500 md:w-[50%] lg:w-[100%]">
                Two
            </div>
            <div className="h-[221px] bg-secondary-500 md:w-[50%] lg:w-[100%]">
                Three
            </div>
        </div>
        <div className="h-[450px] bg-secondary-500 max-lg:h-[400px]">
            One
        </div>
    </div>
  )
}

export default Sales
