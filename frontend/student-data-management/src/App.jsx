import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import ViewStudent from './pages/ViewStudent'
import EditStudent from './pages/EditStudent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addStudent' element={<AddStudent />} />
          <Route path='/viewstudents' element={<ViewStudent />} />
          <Route path='/editstudents/:id' element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
