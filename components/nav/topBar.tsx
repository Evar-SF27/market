"use client"

import { DropDown } from ".."
import { useState } from "react"

const topBar = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("USD")
    const [selectedLanguage, setSelectedLanguage] = useState("ENG")
  return (
    <div className="h-11 bg-secondary-800 flex-between px-3">
        <div>
            <p className="text-sm text-white">
                Up to 70% off the entire store!
            </p>
        </div>
        <div className="flex-between">
            <DropDown 
                getter={selectedCurrency}
                setter={setSelectedCurrency}
                selectedStyles="w-12 mr-1 text-white border-r text-sm"
                dropdownStyles="absolute right-0 z-10 mt-3 w-15 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                elementStyles="flex justify-center px-4 py-2 text-sm"
                dropdownElements={["USD", "EUR", "XAF"]}
            />
            <DropDown 
                getter={selectedLanguage}
                setter={setSelectedLanguage}
                selectedStyles="w-12 mr-1 text-white border-r text-sm"
                dropdownStyles="absolute right-0 z-10 mt-3 w-15 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                elementStyles="flex justify-center px-4 py-2 text-sm"
                dropdownElements={["ENG", "FRE", "POR"]}
            />
            <a href="#" className="ml-2 text-sm text-white">Become an Affiliate</a>
        </div>
    </div>
  )
}

export default topBar
