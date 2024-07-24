import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { colors } from "../../styles/colors";
import { FaPlay } from "react-icons/fa";

export default function ChartCarousel() {
  return (
    <>
      <div className="bg-gray-50 rounded-xl w-full flex p-5" style={{ height: "400px" }}>
        <div className="flex flex-col w-96 gap-2 font-quicksand ">
          <h1 className="font-bold text-xl">Relação vendas por mensagens enviadas</h1>
          <p className="font-normal text-base flex-1  ">Este gráfico mede o desempenho das mensagens enviadas em relação às vendas geradas.<br/>Lembre-se que uma baixa relação entre vendas e mensagens enviadas pode indicar que o conteúdo das mensagens precisa ser revisado. As chaves para aumentar as vendas são: engajamento, conexão e conteúdo de qualidade.</p>
          <div className="flex items-center gap-2">
              <div className="bg-gray-500 w-6 h-6 rounded-full flex items-center justify-center">
                <FaPlay color={colors.gray['50']} size={12}/>
              </div>
              <div className="flex gap-1">
                <div className="bg-lime-600 rounded-3xl w-16 h-4"></div>
                <div className="bg-gray-400 rounded-full w-4 h-4"></div>
                <div className="bg-gray-400 rounded-full w-4 h-4"></div>
              </div>
          </div>
        </div>
        <div className="flex-1 bg-slate-500 ml-8 rounded-lg">

        </div>
      </div>
      <div className="flex gap-2 justify-end h-8">
        <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
          <IoChevronBack color={colors.gray['900']} size={24} />
        </div>
        <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
          <IoChevronForward color={colors.gray['900']} size={24} />
        </div>
      </div>
    </>
  )
}