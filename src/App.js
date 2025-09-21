import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import MusicCatalog from './components/MusicCatalog';
import SubscriptionManager from './components/SubscriptionManager';
import PlaylistList from './components/PlaylistList';

// Componente de navegación
const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Catálogo
        </Link>
        <Link 
          to="/subscriptions" 
          className={`nav-link ${location.pathname === '/subscriptions' ? 'active' : ''}`}
        >
          Suscripciones
        </Link>
        <Link 
          to="/playlists" 
          className={`nav-link ${location.pathname === '/playlists' ? 'active' : ''}`}
        >
          Mis Playlists
        </Link>
      </div>
    </nav>
  );
};

// Componente principal de la aplicación
function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>🎵 Music Platform</h1>
          <p>Gestión de Suscripciones de Música</p>
        </header>
        
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<MusicCatalog />} />
            <Route path="/subscriptions" element={<SubscriptionManager />} />
            <Route path="/playlists" element={<PlaylistList />} />
          </Routes>
        </main>
        
        <footer style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', color: '#666' }}>
          <p>&copy; 2025 Music Platform - Aplicación de prueba</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;