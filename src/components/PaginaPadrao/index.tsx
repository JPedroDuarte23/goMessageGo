import { Outlet, useLocation } from "react-router-dom";
import { lazy, useEffect, useState } from "react";

const SideMenu = lazy(() => import("../SideMenu"))
const Header = lazy(() => import("../Header"))

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
      <div className="flex-1">
        <Header sectionName={sectionName} configMessage={sectionName === "Configurar mensagens"}/>
        <Outlet />
      </div>
    </div>
  )
}