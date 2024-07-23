import clsx from "clsx"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { colors } from "../../styles/colors"
import { useState } from "react"


interface InputProps {
  inputWidth: string,
  label: string,
  placeholder: string,
  error?: boolean,
  password?: boolean
  hint?: string,
  leftIcon?: string,
  leftIconAlt?: string,
  rightIcon?: string,
  rightIconAlt?: string
}


export default function Input(
  { inputWidth, 
    label, 
    placeholder, 
    error = false, 
    password = false, 
    hint, 
    leftIcon, 
    leftIconAlt, 
    rightIcon, 
    rightIconAlt 
  }: InputProps) {

  const [inputType, setInputType] = useState(password ? "password" : "text")

  function handleShowPassword() {
    setInputType((prevState) => prevState === "text" ? "password" : "text")
  }

  function renderEyeIcons(){
    if(inputType === "password"){
      return <FaEye className="m-auto" color={colors.gray["900"]} size={24} onClick={handleShowPassword}/>
      
    } else {
      return <FaEyeSlash className="m-auto" color={colors.gray["900"]} size={24} onClick={handleShowPassword}/>
    }
  }

  return (
    <div className='font-quicksand flex flex-col align-top justify-items-start' style={{ width: `${inputWidth}` }}>
      <div className='font-semibold text-lg text-left mb-2 flex gap-1'>
        <label htmlFor="input">{label}</label>
        <p className='text-red-500'>*</p>
      </div>
      <div className='p-4 flex bg-gray-50 rounded-xl gap-2'>
        {leftIcon &&
          <img className='w-6 h-6' src={leftIcon} alt={leftIconAlt} />
        }
        <input id="input" className='w-full bg-transparent flex-1 focus:outline-none text-lg' placeholder={placeholder} type={inputType} name="input"/>
        {rightIcon && 
          <img className='w-6 h-6' src={rightIcon} alt={rightIconAlt} />
        }
        { password &&
          renderEyeIcons()
        }
        
      </div>
      {hint &&
        <div>
          <p className={clsx(
            'text-sm text-left mt-1',
            {
              "text-red-500": error,
              "font-medium": error,
              "text-black": !error
            }
          )}>{hint}</p>
        </div>
      }
    </div>

  )
}