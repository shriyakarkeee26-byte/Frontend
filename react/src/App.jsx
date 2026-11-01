import { Route, Routes } from "react-router-dom"  
import "./App.css"
import Home from "./Home"
import Contact from "./Contact"
import StudentParent from "./assets/components/StudentParent"
import Navbar from "./assets/components/Navbar"
import About from "./assets/pages/About"
import ProjectParent from "./assets/components/Projects/ProjectParent"
import ScrollToTop from "./assets/components/Projects/ScrollToTop"

function App() {
  return (
  <>

<Navbar />
<ScrollToTop/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
    <Route path="/contact" element ={<Contact/>}/>
       <Route path="/student" element ={<StudentParent/>}/>
       <Route path="/about" element ={<About/>}/>
    <Route path="/projects" element={<ProjectParent />} />
    </Routes>
    </>
  )
}

export default App;