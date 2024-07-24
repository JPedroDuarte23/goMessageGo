import { useState } from "react"
import ChartCarousel from "../../components/ChartCarousel"
import DataCard from "../../components/DataCard"

type DataObject = {
  tituloCard: string,
  valor: string,
  dado: string
}

export default function GraficoDashboard() {

  const data: DataObject= {
    tituloCard: "Mensagens com feedback positivo",
    valor: "312",
    dado: "mensagens"
  }

  const [cardList, setCardList] = useState<DataObject[]>([data, data, data])

  return (
    <div className="pt-4 flex flex-col gap-4">
      <ChartCarousel />
      <div className="flex flex-1 gap-4">
        {
          cardList.map(card => <DataCard {...card} flexible={cardList.length > 2}/> )
        }
      </div>
    </div>
  )
}