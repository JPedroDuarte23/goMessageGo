import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import MenuItem from "./MenuItem";
import { colors } from "../../styles/colors";
import { MdBarChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";

const IconTypes = {
  color: colors.gray['900'],
  size: 20
}

export default function SideMenu(){
  return (
    <div className="h-screen bg-gray-500 w-64 flex flex-col gap-2">
      <div className="h-24 border-b border-white flex items-center justify-center">
        <img src="" alt="" className="w-56 h-16 bg-white rounded-lg"/>
      </div>
      <h1 className="font-semibold font-quicksand text-sm text-white ml-2">Seções</h1>
      <div>
        <ul className="">
          <MenuItem path="/dashboard" linkText="Gráficos e métricas" selected>
            <MdBarChart {...IconTypes}/>
          </MenuItem>
          <MenuItem path="/dashboard/mensagem" linkText="Configurar mensagens">
            <BiSolidMessageRoundedDetail {...IconTypes}/>
          </MenuItem>
          <MenuItem path="/dashboard/configuracoes" linkText="Configurações gerais">
            <BsGearFill {...IconTypes}/>
          </MenuItem>
        </ul>
      </div>

    </div>
  )
}