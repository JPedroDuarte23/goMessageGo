import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import loadingGif from '../../assets/loading.gif'
import { DdiApiResponse } from '../../types/ddiApi';
import dddFlags from '../../assets/data2.json'

export default function TelefoneInput() {

  const [phone, setPhone] = useState("")
  const [ddi, setDdi] = useState<number>(55);
  const [flag, setFlag] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value)
  }

  useEffect(() => { 
    setFlag(loadingGif)
    const fetchFlag = async () => {
      try{
        const response = dddFlags
        const entry = Object.values(response).find((entry: DdiApiResponse) => entry.ddi == ddi);

        if(entry) {
          setFlag(entry.img)
        }
      } catch (e){
        console.log(e)
      }
    }

    fetchFlag()
  }, [ddi])

  return (
    <div className="flex items-center gap-6">
      <label htmlFor="" className="text-base font-semibold w-60">Número de telefone: <strong className="text-red-500">*</strong> </label>
      <div className="w-24 h-14 bg-gray-50 rounded-lg pt-1 p-2  shadow-input">
        <h4 className="text-xs font-semibold">Ddd</h4>
        <div className="flex items-center gap-2">
          <img className="ml-1 w-5 h-full" src={flag} />
          <input className="w-10 bg-transparent focus:outline-none" type="number" value={ddi} onChange={(event) => setDdi(event.target.value)}/>
        </div>
      </div>
      <div className="w-2/5 ml-4 p-4 bg-gray-50 rounded-lg shadow-input">
        <InputMask
          mask="(99) 99999-9999"
          value={phone}
          onChange={handleChange}
          className="focus:outline-none w-full bg-transparent"
          type="text" placeholder="Digite o número do telefone"
        />
        
      </div>
    </div>
  )
}