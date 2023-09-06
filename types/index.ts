// import { MouseEventHandler } from 'react'

import Category from "@/components/category/category"

// export interface CustomButtonProps {
//     title: string,
//     containerStyles: string,
//     handleClick?: MouseEventHandler<HTMLButtonElement>
//     btnType?: "button" | "submit"
//     textStyles?: string
//     rightIcon?: string
//     isDisabled?: boolean
// }

// export interface CarProps {
//     city_mpg: number,
//     class: string,
//     year: number,
//     combination_mpg: number,
//     cylinders: number,
//     displacement: number,
//     drive: string,
//     fuel_type: string,
//     highway_mpg: number,
//     make: string,
//     model: string,
//     transmission: string
// } 

export interface PersonProps {
    id: number,
    name: string,
} 

export interface DropDownProps {
    getter?: string,
    setter?: (currency: string) => void
    selectedStyles?: string,
    dropdownStyles: string,
    elementStyles: string,
    dropdownElements: string[]
}

export interface ConnectionOptions {
    useUnifiedTopology: boolean,
    useNewUrlParser: boolean
}

export interface InitialState {
    value: AuthState
}
export interface InitialStoreState {
    store: StoreProps,
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


export interface UserProps {
    _id: string,
    username: string,
    email: string,
    store: Array<string>
}

export interface AuthState {
    isAuth: boolean,
    user: UserProps | null | undefined,
    access_token: string,
    store: String | null
}

export interface Props {
    children: React.ReactNode
}

export interface StoreProps {
    _id: string,
    store_name: string,
    slug: string,
    user: string,
    location: string,
    description: string,
    rating: number,
    subscribers: Array<string>,
    contact: string,
    photo_url: string
}

export interface CategoryProps {
    id: string,
    category_name: string,
    category_slug: string,
    parent_category: string,
    sub_categories: Array<string>,
    is_sub: boolean,
    photo: string
}

export interface StorePageProps {
    store: StoreProps,
    categories: Array<CategoryProps>
}
