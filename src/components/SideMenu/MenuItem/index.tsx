import clsx from "clsx"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface MenuItemProps{
  children: ReactNode,
  path: string,
  linkText: string,
  selected?: boolean
}

export default function MenuItem({ children, path, linkText, selected }: MenuItemProps) {
  return (
    <Link to={path} className={clsx(
      "flex flex-row gap-2 pl-4 pt-2 pb-2 transition-all",
      {
        "bg-lime-700": selected,
        "rounded-tl-md": selected,
        "rounded-bl-md": selected,
        "ml-2": selected,
        "hover:bg-gray-700": !selected 
      }
      )}>
      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
        { children } 
      </div>
      <h1 className={clsx(
        "font-semibold font-quicksand text-base",
         {  
          "text-gray-50": !selected,
          "text-black": selected
         })}
         >{linkText}</h1>
    </Link>
  )
}