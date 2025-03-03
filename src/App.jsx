import NavBar from './components/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects'
import Cv from './pages/Cv'

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Projects />}></Route>
        <Route path="/Cv" element={<Cv />}></Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
