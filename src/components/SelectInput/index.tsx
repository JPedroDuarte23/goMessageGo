import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa'
import { colors } from '../../styles/colors'

type People = {
  id: number,
  name: string
}

type Idioma = {
  id: number, 
  name: string
}

const idiomas: Idioma[] = [
  { id: 1, name: "PT-BR"},
  { id: 2, name: "EN-US"},
]


export default function SelectInput() {

  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Idioma | null>(idiomas[0])

  const filteredIdioma =
    query === ''
      ? idiomas
      : idiomas.filter((idioma) => {
        return idioma.name.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <div className="flex items-center gap-6">
      <label htmlFor="" className="w-60 font-semibold">Idioma: <strong className="text-red-500">*</strong></label>
      <div className="w-60 bg-gray-50 p-4 rounded-lg shadow-input">
        <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
          <div className="relative">
            <ComboboxInput
              className={clsx(
                'w-full rounded-lg border-none bg-gray-50 pr-8 pl-2 text-base text-black',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
              displayValue={(idioma: Idioma) => idioma?.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
              <FaChevronDown color={colors.gray['900']} size={16} />
            </ComboboxButton>
          </div>

          <ComboboxOptions
            anchor="bottom"
            transition
            className={clsx(
              'w-[var(--input-width)] rounded-xl border border-white/5 bg-gray-50 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
              'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            )}
          >
            {filteredIdioma.map((idioma) => (
              <ComboboxOption
                key={idioma.id}
                value={idioma}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <FaCheckCircle className="invisible size-4 fill-lime-800 group-data-[selected]:visible" />
                <div className="text-sm/6 text-black">{idioma.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
    </div>
  )
}