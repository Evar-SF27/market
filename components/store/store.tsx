import { StoreDashboard, StorePoster } from '@/components'
import { StorePageProps } from '@/types'

const StoreFront = ({ store, categories }: StorePageProps | any) => {
  return (
    <div className="">
      <StorePoster store={store} />
      <StoreDashboard store={store} />
    </div>
  )
}

export default StoreFront
