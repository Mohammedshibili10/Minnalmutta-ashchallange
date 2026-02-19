
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Spinwheel from './components/Spinwheel'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/spinwheel' element={<Spinwheel/>}/>
    
      </Routes>
    </>
  )
}

export default App
