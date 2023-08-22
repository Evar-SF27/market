// import { MouseEventHandler } from 'react'

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
    store: Array<string> | null
}

export interface Props {
    children: React.ReactNode
}

export interface StoreProps {
    id: string,
    store_name: String,
    slug: String,
    user: String,
    location: String,
    description: String,
    rating: Number,
    subscribers: Array<string>,
    contact: String,
    photo_url: String
}
