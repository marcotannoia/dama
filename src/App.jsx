import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pagine
import { Home } from './pages/Home';
import { Contatti } from './pages/Contatti';
import { ChiSiamo } from './pages/ChiSiamo'; 
import { Servizi } from './pages/Servizi';   

// Componenti
import PillNav from './components/PillNav';
import logo from './images/dama.png'; 
import './App.css';

const AppContent = () => {
  const location = useLocation(); 

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Chi Siamo', href: '/chisiamo' },
    { label: 'Servizi', href: '/servizi' },    
    { label: 'Contatti', href: '/contatti' },
  ];

  return (
    <div className="app-wrapper">
      
      {/* NAVBAR */}
      <PillNav
        logo={logo}
        items={navItems}
        activeHref={location.pathname}
      />

      {/* NIENTE PIÙ BOTTONE LUNA/SOLE */}

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chisiamo" element={<ChiSiamo />} /> 
          <Route path="/servizi" element={<Servizi />} />   
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