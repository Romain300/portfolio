import LandingPage from "./components/layout/LandingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./components/layout/ProjectsPages";

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="collection" element={ <ProjectsPage /> } />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
