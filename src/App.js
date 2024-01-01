import './App.css';
import logo from './logo.svg';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import { useEffect, useState } from 'react';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
// Use line 10 when you want do a fresh github api call, and comment switch project/setProhect import
// import { getGithubData } from './helper';
import { projectsUsedAcrossApplication } from './helper';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // Store things in useState that you want to access across your application (or things that update)
  // let [projects, setProjects] = useState(getGithubData());
  let [projects, setProjects] = useState(projectsUsedAcrossApplication);

  useEffect(() => {
    if (projects.length === 0) {
      setProjects(projectsUsedAcrossApplication);
    }
  }, [projects])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path={`/`} element={<Home logo={logo} />} />

          <Route path={`/about`} element={<About logo={logo} />} />
          <Route path={`/aboot`} element={<About logo={logo} />} />
          <Route path={`/aboit`} element={<About logo={logo} />} />
          <Route path={`/about-us`} element={<About logo={logo} />} />
          <Route path={`/aboutUs`} element={<About logo={logo} />} />

          <Route path={`/portfolio`} element={
            <Portfolio logo={logo} projects={projects} />
          } />
          
          <Route path={`/resume`} element={<Resume logo={logo} />} />
          
          <Route path={`/contact`} element={<Contact logo={logo} />} />
          <Route path={`/contactus`} element={<Contact logo={logo} />} />
          <Route path={`/contactme`} element={<Contact logo={logo} />} />
          <Route path={`/contact-me`} element={<Contact logo={logo} />} />
          <Route path={`/contact-us`} element={<Contact logo={logo} />} />

        </Routes>
      </Router>
    </div>
  );
}