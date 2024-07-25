import clsx from "clsx"

interface ButtonProps {
  label: string
  variant?: "primary" | "secundary",
  classname?: string
}

export default function Button({ label, variant = "primary", classname }: ButtonProps) {
  return (
    <button className={clsx(
      "shadow-button",
      {
        "bg-lime-600 text-black hover:bg-lime-800 transition-colors": variant === "primary"
      },
      classname
    )}>
      {label}
    </button>
  )
}