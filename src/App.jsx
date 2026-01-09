import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Home } from './pages/Home';
import { Contatti } from './pages/Contatti';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <nav>
        <Link to="/" className="logo">DA.MA.</Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contatti">Contatti</Link>
          <Link to="/contatti">Studio</Link>
          
          <button onClick={toggleTheme} className="theme-btn" title="Cambia tema">
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;