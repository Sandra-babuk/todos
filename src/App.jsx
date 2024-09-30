import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import View from './View'
function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='view' element={<View/>}></Route>

      </Routes>
    </>
  )
}

export default App
