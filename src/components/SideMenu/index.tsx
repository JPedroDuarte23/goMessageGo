import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { colors } from "../../styles/colors";
import { MdBarChart } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { lazy } from "react";
import { CgLogOut } from "react-icons/cg";

const MenuItem = lazy(() => import("./MenuItem"))

const IconTypes = {
  color: colors.gray['900'],
  size: 20
}

export default function SideMenu(){

  //LOCATE 
  const location = useLocation();

  return (
    <div className="h-screen bg-gray-800 w-64 flex flex-col gap-2 pb-2">
      <div className="h-24 border-b border-white flex items-center justify-center">
        <div className="w-56 h-16 bg-white rounded-lg"/>
      </div>
      <h1 className="font-semibold font-quicksand text-sm text-white ml-2">Seções</h1>
      <div className="flex-1">
        <ul>
          <MenuItem path="/dashboard" linkText="Gráficos e métricas" selected={location.pathname === "/dashboard"}>
            <MdBarChart {...IconTypes}/>
          </MenuItem>
          <MenuItem path="/dashboard/mensagens" linkText="Configurar mensagens" selected={location.pathname === "/dashboard/mensagens"}>
            <BiSolidMessageRoundedDetail {...IconTypes}/>
          </MenuItem>
          <MenuItem path="/dashboard/configuracoes" linkText="Configurações gerais" selected={location.pathname === "/dashboard/configuracoes"}>
            <BsGearFill {...IconTypes}/>
          </MenuItem>
        </ul>
      </div>
        <MenuItem path="/" linkText="Sair">
          <CgLogOut {...IconTypes}/>
        </MenuItem>
    </div>
  )
}