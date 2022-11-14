import './styles/App.css';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Login from "./pages/Login"


function App() {
  return (
  <>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  </div>
  </>)
}

export default App;