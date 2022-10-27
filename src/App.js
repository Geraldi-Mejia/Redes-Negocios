import logo from './logo.svg';
import './styles/App.css';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import About from "./pages/About"

function App() {
  return (
  <>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </div>
  </>)
}

export default App;