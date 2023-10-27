import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Right2no from "./components/Right2no.js"
import LandingPage from "./components/frontpage.js"


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/right2no' element={<Right2no/>} />
        

      </Routes>
    
    </BrowserRouter>
  )
}

export default App