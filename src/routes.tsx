import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaLogin from './pages/PaginaLogin/PaginaLogin'

export default function AppRouter() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<PaginaLogin />}/>
      </Routes>
    </Router>
  )
}