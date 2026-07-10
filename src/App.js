import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Menu from './Components/Menu';

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;