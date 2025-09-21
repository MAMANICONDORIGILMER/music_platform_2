import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/" className={isActive('/')}>
          Inicio
        </Link>
        <Link to="/music" className={isActive('/music')}>
          Catálogo
        </Link>
        <Link to="/subscription" className={isActive('/subscription')}>
          Suscripción
        </Link>
        <Link to="/playlists" className={isActive('/playlists')}>
          Mis Playlists
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;