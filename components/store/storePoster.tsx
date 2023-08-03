import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const StorePoster = () => {
  return (
    <div className="mx-4">
        <Image 
          src="/images/discount.png"
          alt="Store Photo URL"
          width={200}
          height={200}
          className="bg-secondary-500 rounded-xl"
        />
        <div className="flex flex-col">
          <div className="flex">
            <div>
              <h1 className="text-[32px] font-bold text-primary">Store Name</h1>
              <h3>@store owner username</h3>
              <p>Location: Malingo, Buea.</p>
              <p>Tel: (XXX) XXX-XXX-XXX</p>
            </div>
            <div>
              <p><span>00</span> Subscriber</p>
              <p><span>00</span> Posts</p>
              <p><span>00</span> Products</p>
              <p><span>00</span> Transactions</p>
              <br/>
              <button>
                <PencilIcon />
                Edit Store
              </button>
              <button>
                <TrashIcon />
                Delete Store
              </button>
            </div>
          </div>
          <div>
            <h1>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum praesentium reiciendis aspernatur velit, iure commodi voluptatum atque voluptas quos in. Beatae repellat nemo nobis eius neque modi adipisci cupiditate!</p>
          </div>
        </div>
    </div>
  )
}

export default StorePoster
