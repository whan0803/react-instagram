import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
