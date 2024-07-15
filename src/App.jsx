import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DoctorMouseLandingPage from './Components/DoctorMouseLandingPage'

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DoctorMouseLandingPage />}></Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
