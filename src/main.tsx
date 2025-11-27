import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './theme/global.css'
import { Home } from './pages/home'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        

      </Routes>
    </Router>
  </React.StrictMode>,
)
