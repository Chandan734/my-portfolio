import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Menu from './Components/Menu';

function App() {
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route index element={<Menu/>}/>
      <Route  path='/About' element={<About />}/>
      <Route  path='/Project' element={<Project/>}/>
      <Route  path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
