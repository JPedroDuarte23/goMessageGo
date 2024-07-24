import clsx from "clsx"

interface ButtonProps {
  label: string
  variant?: "primary" | "secundary"
}

export default function Button({ label, variant = "primary" }: ButtonProps) {
  return (
    <button className={clsx(
      "p-4 rounded-md font-bold text-lg",
      {
        "bg-lime-400": variant === "primary",
        "text-black" : variant === "primary"
      }
    )}>
      {label}
    </button>
  )
}