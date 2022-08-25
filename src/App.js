import { Route, Routes } from 'react-router-dom'
import './App.css'
import Additems from './Components/AddItems/Additems'
import Home from './Components/Home/Home'
import Navbar from './Components/Home/Navbar'
import Inventory from './Components/Inventory/Inventory'
import Login from './Components/Login/Login'
import SignUp from './Components/Login/SignUp'
import Myitems from './Components/Myitems/Myitems'

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/additems" element={<Additems />} />
        <Route path="/myitems" element={<Myitems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>

    </div>
  )
}

export default App
