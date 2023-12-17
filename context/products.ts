import { ProductProps } from '@/types'
import { createContext } from 'react'

const ProductContext = createContext<Array<ProductProps> | undefined>([])

export default ProductContext