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