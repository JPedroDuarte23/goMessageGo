import { Outlet } from "react-router-dom";
import SideMenu from "../SideMenu";
import Header from "../Header";

export default function PaginaPadrao() {

  return (
    <div className="bg-gray-500 flex">
      <SideMenu />
      <div className="flex-1 pl-8 pr-10">
        <Header sectionName="Gráficos e métricas"/>
        <Outlet />
      </div>
    </div>
  )
}