import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  accordionLabel: string,
  children: ReactNode
}

export default function Accordion({ accordionLabel, children }: AccordionProps) {
  return (
    <div className=" w-full max-w-lg rounded-xl bg-transparent">
      <Disclosure as="div" className="p-2">
        <DisclosureButton className="group flex w-full items-center justify-between">
          <span className="text-lg font-medium text-black group-data-[hover]:text-black/80">
            {accordionLabel}
          </span>
          <FaChevronDown className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-4 text-base text-black/90">
          { children }
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}