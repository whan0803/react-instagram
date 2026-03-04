import './App.css'
import { useState } from 'react';



import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import Signup from './pages/Signup/Signup';
import HomePage from './pages/HomePage/HomePage';


function App() {



  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/homepage' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
