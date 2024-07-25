import { useState } from 'react'
import wppBackground from '../../../assets/wppBackground.png'
import msgThing from '../../../assets/msgThing.svg'
import cellMockup from '../../../assets/cellMockup.png'

export default function CelularMockup() {

  const [textMessage, setTextMessage] = useState("")

  return (
    <div
      className="flex-1 w-full ml-3 relative flex justify-center items-center"
      style={{
        height: "calc(100vh - 80x)",
        top: '-20px',
        background: 'radial-gradient(50% 60% at 50% 50%, #A0A0A0 0%, #333 100%)'
      }}>
      <div
        className="flex justify-center rounded-ee-3xl rounded-es-3xl w-96"
        style={{
          height: '600px',
          backgroundImage: `url(${cellMockup})`,
          backgroundPosition: '48% 88%',
          backgroundSize: '128%'
        }}>
        <div
          className="flex flex-col w-11/12 rounded-ee-2xl rounded-es-2xl scroll-y-auto"
          style={{
            maxHeight: '570px',
            backgroundImage: `url(${wppBackground})`
          }}>
          <div className='flex-1 flex flex-col justify-end'>
            <div className='flex flex-row-reverse'>
              <div className='w-4 h-4 ml-1 mr-1 rounded-full bg-orange-400'></div>

              <img className='h-fit my-1.5 relative' src={msgThing} style={{ right: '4px' }} />

              <div
                className='flex flex-col items-start bg-lime-500 w-9/12 min-h-[30px] 
                h-auto max-h-[440px] px-1 my-1.5 rounded-md rounded-se-none overflow-y-auto
              scrollbar-thumb-gray-50 scrollbar-thin scrollbar-track-transparent'
              >
                <h6 className='h-2 w-2 mt-1 mb-1.5  font-bold' style={{ fontSize: '10px' }}>Preview</h6>

                <p
                  className='text-xs font-medium font-quicksand w-full'
                  style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
                >
                  {textMessage}
                </p>

                <div className='h-2 w-2'></div>
              </div>
            </div>
          </div>

          <div className='flex gap-2 bg-darkgray-500 m-2 rounded-2xl p-4'>

            <textarea
              value={textMessage}
              onChange={evento => setTextMessage(evento.target.value)}
              className='
              bg-transparent focus:outline-none caret-lime-500
              scrollbar-thumb-gray-50 scrollbar-thin scrollbar-track-transparent
              pl-2 resize-none min-h-[30px] w-full
              text-wrap text-white font-quicksand  '
              placeholder='Digite a sua mensagem aqui'
            />
          </div>

        </div>
      </div>
    </div>
  )
}