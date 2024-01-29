'use client'

import { ProductProps } from '@/types'
import { createContext } from 'react'

const ProductContext = createContext<Array<ProductProps> | undefined>([])
const ProductIdContext = createContext<ProductProps | null>(null)

export { ProductContext, ProductIdContext }
