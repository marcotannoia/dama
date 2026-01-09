import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Home } from './pages/Home';
import { Contatti } from './pages/Contatti';
import PillNav from './components/PillNav';
import logo from './images/dama.png'; // Percorso immagine
import './App.css';

// Componente Wrapper per passare la location corrente alla Navbar
const AppContent = () => {
  const [theme, setTheme] = useState('light');
  const location = useLocation(); // Serve per evidenziare il link attivo

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

  // Voci del menu
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Contatti', href: '/contatti' },
    // Aggiungi altre voci se vuoi, es: { label: 'Servizi', href: '/#servizi' }
  ];

  return (
    <div className="app-wrapper">
      
      {/* 1. NUOVA NAVBAR PILL */}
      <PillNav
        logo={logo}
        items={navItems}
        activeHref={location.pathname}
        initialLoadAnimation={true}
        // COLORI PERSONALIZZATI DA.MA.
        baseColor="var(--primary)"         // Il cerchio rosso
        pillColor="var(--bg-card)"         // Lo sfondo delle pillole (Bianco/Scuro)
        pillTextColor="var(--text-main)"   // Testo
        hoveredPillTextColor="#ffffff"     // Testo quando passi sopra (Bianco su sfondo rosso)
      />

      {/* 2. BOTTONE TEMA FLOTTANTE (Spostato perché non entra nella nav) */}
      <button 
        onClick={toggleTheme} 
        className="theme-floating-btn" 
        title="Cambia tema"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;