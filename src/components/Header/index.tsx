import { TbBellRinging2Filled } from "react-icons/tb"
import { colors } from "../../styles/colors"
import { BsFillMoonFill } from "react-icons/bs"

interface HeaderProps {
  sectionName: string
  profilePicture?: string,
  configMessage?: boolean
}

export default function Header({ sectionName, configMessage = false, profilePicture = 'https://avatars.githubusercontent.com/u/125396617?v=4' }: HeaderProps) {

  if (configMessage) {
    return (
      <div className="flex justify-between">
        <div className="h-24 bg-white flex items-center pl-8 rounded-lg shadow-card z-10" style={{ width: "584px" }}>
          <h1 className="font-quicksand font-bold text-2xl my-auto">{sectionName}</h1>
        </div>
        <div className="flex-1 flex items-center justify-end pr-10 h-24 z-10" style={{background: 'radial-gradient(146.31% 146.31% at 50.09% 185.98%, rgba(51, 51, 51, 0.00) 55.39%, #333 89.67%)'}}>
        <div className="flex gap-4 justify-center items-center pb-4">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-button cursor-pointer">
            <TbBellRinging2Filled color={colors.gray['900']} size={20} />
          </div>
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-button cursor-pointer">
            <BsFillMoonFill color={colors.gray['900']} size={18} />
          </div>
          <div className="bg-white rounded-full w-12 h-12 overflow-hidden shadow-button cursor-pointer">
            <img src={profilePicture} alt="Foto de perfil" />
          </div>
        </div>
        </div>
        
      </div>
    )
  }

  return (
    <div className="flex justify-between mt-4 pr-10 pl-8">
      <h1 className="text-white font-quicksand font-bold text-2xl my-auto">{sectionName}</h1>
      <div className="flex gap-4 justify-center items-center">
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-button cursor-pointer">
          <TbBellRinging2Filled color={colors.gray['900']} size={20} />
        </div>
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-button cursor-pointer">
          <BsFillMoonFill color={colors.gray['900']} size={18} />
        </div>
        <div className="bg-white rounded-full w-12 h-12 overflow-hidden shadow-button cursor-pointer">
          <img src={profilePicture} alt="Foto de perfil" />
        </div>
      </div>
    </div>
  )
}