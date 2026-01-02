import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CurrentCompany from './components/CurrentCompany';
import PlacementProjects from './components/PlacementProjects';
import Internships from './components/Internships';
import College from './components/College';
import Polytechnic from './components/Polytechnic';
import Education from './components/Education';
import FrontendSkills from './components/FrontendSkills';
import BackendSkills from './components/BackendSkills';

function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current-company" element={<CurrentCompany />} />
          <Route path="/placement-projects" element={<PlacementProjects />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/college" element={<College />} />
          <Route path="/polytechnic" element={<Polytechnic />} />
          <Route path="/education" element={<Education />} />
          <Route path="/frontend-skills" element={<FrontendSkills />} />
          <Route path="/backend-skills" element={<BackendSkills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;