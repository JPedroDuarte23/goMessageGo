import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaLogin from './pages/PaginaLogin'
import GraficoDashboard from './pages/GraficoDashboard'
import PaginaPadrao from './components/PaginaPadrao'

export default function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<PaginaLogin />}/>
        <Route path='/dashboard' element={<PaginaPadrao />}>
          <Route index element={<GraficoDashboard />}/>
        </Route>
      </Routes>
    </Router>
  )
}