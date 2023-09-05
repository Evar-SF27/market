import './styles/index.css'

const Sales = () => {
  return (
    <div className="lg:grid grid-cols-3 gap-2">
        <div className="h-[500px] max-lg:h-[400px] background_one backdrop">
        </div>
        <div className="md:flex lg:flex-col gap-2">
            <div className="h-[246px] md:w-[50%] lg:w-[100%] background_two backdrop">
                Two
            </div>
            <div className="h-[246px] md:w-[50%] lg:w-[100%] background_three backdrop">
                Three
            </div>
        </div>
        <div className="h-[500px] max-lg:h-[400px] background_four backdrop">
            One
        </div>
    </div>
  )
}

export default Sales
