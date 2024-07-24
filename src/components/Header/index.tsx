import { TbBellRinging2Filled } from "react-icons/tb"
import { colors } from "../../styles/colors"
import { BsFillMoonFill } from "react-icons/bs"

interface HeaderProps {
  sectionName: string
  profilePicture?: string
}

export default function Header({ sectionName, profilePicture }: HeaderProps) {
  return (
    <div className="flex justify-between mt-4 ">
      <h1 className="text-white font-quicksand font-bold text-2xl my-auto">{sectionName}</h1>
      <div className="flex gap-4 justify-center items-center">
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <TbBellRinging2Filled color={colors.gray['900']} size={20}/>
        </div>
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <BsFillMoonFill color={colors.gray['900']} size={18}/>
        </div>
        <div className="bg-white rounded-full w-12 h-12 overflow-hidden">
          <img src={profilePicture} alt="Foto de perfil" />
        </div>
      </div>
    </div>
  )
}