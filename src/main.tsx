import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './theme/global.css'
import { Home } from './pages/home'
import { NotFound } from './pages/notfound'
import { Login, Register } from './pages/Auth'
import { Community } from './pages/comunidade'
import { LearnIMC } from './pages/aprendendo-imc'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/LearnIMC" element={<LearnIMC />} />


        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        


        <Route path="*" element={<NotFound />} />


        

      </Routes>
    </Router>
  </React.StrictMode>,
)
