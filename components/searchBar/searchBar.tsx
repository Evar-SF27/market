"use client"

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { PersonProps } from '@/types'
import { ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

export default function SearchBar({ otherStyles }: string | any) {
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className={`${otherStyles}`}>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="bg-secondary-500 w-[100%] h-[55px] border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
              displayValue={(person: PersonProps) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="bg-primary sm:w-[13%] w-[25%] justify-center absolute inset-y-0 right-0 flex items-center">
              <MagnifyingGlassIcon className="text-white icons-small" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person: PersonProps) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 sm:pl-10 sm:pr-4 pl-6 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

