import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import DairyDiscover from './pages/DailyDiscover'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dairy-discover" element={<DairyDiscover/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
