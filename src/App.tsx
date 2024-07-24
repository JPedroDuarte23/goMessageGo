import './App.css'
import Input from './components/Input'

function App() {

  return (
    <>
      <h1 className='text-3xl font-quicksand font-semibold underline'>
        Hello World
      </h1> 
      <Input 
        inputWidth={"520px"}
        label="Label" 
        hint='Adicione um texto' 
        placeholder='Adicione um texto!' 
        error/> 
    </>
  )
}

export default App
