import { useState } from "react"
import ChartCarousel from "../../components/ChartCarousel"
import DataCard from "../../components/DataCard"
import clsx from "clsx"

type DataObject = {
  tituloCard: string,
  valor: string
}

export default function GraficoDashboard() {

  const data: DataObject= {
    tituloCard: "Mensagens com feedback positivo",
    valor: "3.100"
  }

  const [cardList, setCardList] = useState<DataObject[]>([data, data, data, data])

  return (
    <div className="pt-4 flex flex-col gap-4">
      <ChartCarousel />
      <div className={clsx(
        "flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-lime-700 scrollbar-track-transparent",
        {
          "overflow-x-scroll": cardList.length > 3,
        }
        )} style={{ width: 'calc(100vw -  328px'}}>
        {
          cardList.map(card => <DataCard {...card}/> )
        }
      </div>
    </div>
  )
}