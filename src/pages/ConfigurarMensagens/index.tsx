import Accordion from '../../components/Accordion'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material'
import CelularMockup from './CelularMockup'
import Button from '../../components/Button'

const sx = {
  sx: {
    '&.Mui-checked': {
      color: '#63b231',
    }
  }
}

export default function ConfigurarMensagens() {

  return (
    <div className="flex w-full pr-10 font-quicksand" style={{ height: "calc(100vh - 96px)" }}>

      <div
        className="bg-white relative z-0 flex flex-col pt-[30px] pl-8 pb-4 pr-4 rounded-ee-md overflow-y-auto"
        style={{
          width: "584px",
          height: "calc(100vh - 90px)",
          top: "-6px"
        }}>

        <h2 className='font-semibold text-lg mb-1'>
          Filtros
        </h2>

        <Accordion accordionLabel='Período de compra'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className='w-44 p-2' label="De" views={['month', 'year']} />
            <span className='text-4xl m-2 mt-6'> - </span>
            <DatePicker className='w-44 p-2' label="Até" views={['month', 'year']} />
          </LocalizationProvider>
        </Accordion>

        <Accordion accordionLabel='Tipo de produto'>
          <FormGroup>
            <div className='flex flex-wrap justify-between'>
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
            </div>
            <div className='flex flex-wrap justify-between'>
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
            </div>
            <div className='flex flex-wrap justify-between'>
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
              <FormControlLabel control={<Checkbox />} label="Label" />
            </div>
          </FormGroup>
        </Accordion>

        <h2 className='font-semibold text-lg mt-3'>
          Programar envio
        </h2>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          className='pl-2 pt-2'
        >
          <FormControlLabel style={{ height: '30px' }} value="30" control={<Radio {...sx} />} label="Enviar a cada 1 mês" />
          <FormControlLabel style={{ height: '30px' }} value="60" control={<Radio {...sx} />} label="Enviar a cada 2 meses" />
          <FormControlLabel style={{ height: '30px' }} value="180" control={<Radio {...sx} />} label="Enviar a cada 6 meses" />
          <FormControlLabel style={{ height: '30px' }} value="356" control={<Radio {...sx} />} label="Enviar a cada 1 ano" />
        </RadioGroup>
        <div className='flex-1'>

        </div>
        <div className='flex flex-row-reverse'>
          <Button label="Programar mensagem" classname='p-2 rounded-lg w-64' />
        </div>
      </div>
      <CelularMockup />
    </div>
  )
}