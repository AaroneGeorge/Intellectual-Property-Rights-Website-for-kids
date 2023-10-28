import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Right2no from "./components/Right2no.js"
import LandingPage from "./components/frontpage.js"
import Copyright from './components/Copyright';



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/right2no' element={<Right2no/>} />
        <Route path='/copyright' element={<Copyright/>} />
        

      </Routes>
    
    </BrowserRouter>
  )
}

export default App