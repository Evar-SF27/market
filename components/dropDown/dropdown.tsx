"use client"

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DropDownProps } from '@/types'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Dropdown = ({ getter, setter, dropdownStyles, selectedStyles, elementStyles, dropdownElements } : DropDownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={selectedStyles}>
          {getter}
          <ChevronDownIcon className="mx-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={`${dropdownStyles}`}>
            {dropdownElements.map((element) => (
                <div className="py-1" key={element}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      key={element}
                      onClick={setter && (() => setter(element))}
                      className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} ${elementStyles}`}
                    >
                      {element}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
