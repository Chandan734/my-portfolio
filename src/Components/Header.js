import React,{useState,useEffect} from 'react'
import logo from './Image/logo.jpg'
import { Link } from 'react-router-dom'

function Header() {

  const[isDarkMode,setIsdarkMode]=useState(false);
  const toggleTheme = () => {
    setIsdarkMode(prev => !prev);
  };

  useEffect(() => {
    document.body.className= isDarkMode ?'dark': 'light';
    console.log('Theme changed:', isDarkMode ? 'dark' : 'light');
  },[isDarkMode]);

  return (
 
    <div className='header'>
      <div className='container'>
        <nav>
          <div className='logo'>
            <img src={logo}alt='Chandan logo' className='image-logo'/>
          </div>
          <button onClick={toggleTheme} className='theme-toggle'>
          {isDarkMode ?'🌙' : '☀️'}
          </button>

          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Project'>Project</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>
       
      </div>
    </div>
  )
}

export default Header
