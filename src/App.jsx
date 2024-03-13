import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import HomePage from "./components/HomePage"
import Education from "./pages/Education"
import Project from "./pages/Project"

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/certification" element={<Education/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
