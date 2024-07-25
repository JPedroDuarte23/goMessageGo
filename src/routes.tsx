import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaLogin from './pages/PaginaLogin'
import GraficoDashboard from './pages/GraficoDashboard'
import ConfigurarMensagens from './pages/ConfigurarMensagens'
import { lazy } from 'react'
import ConfiguracoesGerais from './pages/ConfiguracoesGerais'

const PaginaPadrao = lazy(() => import('./components/PaginaPadrao')) 


export default function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<PaginaLogin />}/>
        <Route path='/dashboard' element={<PaginaPadrao />}>
          <Route index element={<GraficoDashboard />}/>
          <Route path="mensagens" element={<ConfigurarMensagens />} />
          <Route path="configuracoes" element={<ConfiguracoesGerais />} />
        </Route>
      </Routes>
    </Router>
  )
}