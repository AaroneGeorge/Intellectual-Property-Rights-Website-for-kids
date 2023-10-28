import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Right2no from "./components/Right2no.js"
import LandingPage from "./components/frontpage.js"
import Copyright from './components/Copyright';
import Trade from './components/trade.js'
import Design from './components/Design.js'


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/right2no' element={<Right2no/>} />
        <Route path='/copyright' element={<Copyright/>} />
        <Route path='/trade' element={<Trade/>} /> 
        <Route path='/design' element={<Design/>} />
        

      </Routes>
    
    </BrowserRouter>
  )
}

export default App