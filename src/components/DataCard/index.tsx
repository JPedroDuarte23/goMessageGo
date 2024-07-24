import clsx from "clsx"

interface DataCardProps{
  tituloCard: string,
  valor: string,
  dado: string,
  flexible?: boolean
}

export default function DataCard({ tituloCard, valor, dado, flexible = false }: DataCardProps) {
  return (
    <div className={clsx(
      "bg-gray-50 h-32 p-3 rounded-xl flex flex-col gap-2",
      {
        "flex-1": flexible
      })}>
      <h2 className="font-bold font-quicksand text-base">{tituloCard}</h2>
      <p className="text-lg flex items-center justify-center gap-2"><strong className="font-bold text-3xl text-lime-700">{valor}</strong> {dado}</p>
    </div>
  )
}