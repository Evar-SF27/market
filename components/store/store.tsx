import { StoreDashboard, StorePoster } from '@/components'
import { StoreProps } from '@/types'

const StoreFront = ({ store }: StoreProps | any) => {
  return (
    <div className="">
      <StorePoster store={store}/>
      <StoreDashboard />
    </div>
  )
}

export default StoreFront
