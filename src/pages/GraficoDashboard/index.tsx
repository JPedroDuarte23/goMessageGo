import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { colors } from "../../styles/colors";

export default function GraficoDashboard() {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <div className="bg-gray-50 rounded-xl w-full" style={{height: "400px"}}>
      </div>
      <div className="flex gap-2 justify-end h-8">
        <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center">
          <IoChevronBack color={colors.gray['900']} size={24}/>
        </div>
        <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center">
          <IoChevronForward color={colors.gray['900']} size={24}/>
        </div>
      </div>
      <div className="flex flex-1 gap-4">
        <div className="bg-gray-50 h-32 flex-1 rounded-xl"></div>
        <div className="bg-gray-50 h-32 flex-1 rounded-xl"></div>
        <div className="bg-gray-50 h-32 flex-1 rounded-xl"></div>
      </div>
    </div>
  )
}