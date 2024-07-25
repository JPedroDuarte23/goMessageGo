

interface DataCardProps{
  tituloCard: string,
  valor: string
}

export default function DataCard({ tituloCard, valor}: DataCardProps) {
  return (
    <div className="bg-gray-50 h-32 w-80 p-3 mb-3 rounded-xl flex items-center gap-3">
      <h2 className="font-bold font-quicksand text-lg w-48">{tituloCard}</h2>
        <strong className="font-bold text-4xl text-lime-700 pr-4">{valor}</strong>
    </div>
  )
}