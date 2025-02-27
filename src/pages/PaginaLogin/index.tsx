import { useNavigate } from 'react-router-dom'
import loginBlob from '../../assets/loginBlob.png'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function PaginaLogin() {

  //NAVIGATE
  const navigate = useNavigate();
  
  //LOGIN
  function formLoginHandler(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="bg-white w-screen h-screen font-quicksand">
      <div className="m-auto flex align-middle h-full justify-between" style={{width : "80%"}}>
        <div className='ml-0 m-auto' style={{ width: "45%" }}>
          <img src={loginBlob} alt="" />
        </div>
        <form className='w-auto flex flex-col justify-center gap-10' onSubmit={formLoginHandler}>
          <h1 className='text-4xl font-bold'>Login</h1>
          <div className='flex flex-col gap-4'>
            <Input inputWidth='538px' label='E-mail' placeholder='Digite o seu email'/>
            <Input 
              inputWidth='538px' 
              label='Senha' 
              placeholder='Digite a sua senha' 
              password
            />
          </div>
          <Button label='Entrar' classname='p-4 rounded-md font-bold text-lg' />            
        </form>
      </div>
    </div> 
  )
}