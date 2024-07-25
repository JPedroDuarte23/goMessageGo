import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../SideMenu";
import Header from "../Header";
import { useEffect, useState } from "react";

export default function PaginaPadrao() {

  //LOCATE
  const location = useLocation();

  //DATA
  const [sectionName, setSectionName] = useState("");


  useEffect(() => {
  if(location.pathname === '/dashboard'){
    setSectionName("Gráficos e métricas")
  } else if (location.pathname === '/dashboard/mensagens'){
    setSectionName("Configurar mensagens")
  } else if (location.pathname === '/dashboard/configuracoes'){
    setSectionName("Configurações gerais")
  }
  }, [location.pathname])

  return (
    <div className="bg-gray-500 flex w-screen">
      <SideMenu />
      <div className="flex-1 pl-8 pr-10">
        <Header sectionName={sectionName}/>
        <Outlet />
      </div>
    </div>
  )
}