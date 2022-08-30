import Aos from 'aos'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Additems from './Components/AddItems/Additems'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Home/Navbar'
import AllInventory from './Components/Inventory/AllInventory'
import StockUpdate from './Components/Inventory/StockUpdate'
import Login from './Components/Login/Login'
import RequireAuth from './Components/Login/RequireAuth'
import SignUp from './Components/Login/SignUp'
import Myitems from './Components/Myitems/Myitems'
import Notfound from './Components/NotFound/Notfound'
import Task from './Components/Task/Task'


function App() {

  return (
    <div>
      {/* https://warm-taiga-97321.herokuapp.com/inventory */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="inventory" element={
          // <RequireAuth>
          <AllInventory />
          // </RequireAuth>
        } />

        <Route path="/inventory/:id" element={
          <RequireAuth>
            <StockUpdate />
          </RequireAuth>

        } />

        <Route path="/additems" element={<Additems />} />
        <Route path="/myitems" element={<Myitems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/task" element={<Task />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
