import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>🎵 Music Subscription App</h1>
        <p>Tu plataforma de streaming de música favorita</p>
      </div>
      
      <div className="card">
        <h2>¡Bienvenido a tu aplicación de música!</h2>
        <p>
          Descubre millones de canciones, crea tus playlists favoritas y gestiona tu suscripción 
          desde un solo lugar. Explora nuestro catálogo completo y disfruta de la mejor experiencia musical.
        </p>
        
        <div className="grid">
          <div className="card">
            <h3>🎶 Catálogo de Música</h3>
            <p>Explora miles de canciones, álbumes y artistas de todos los géneros.</p>
          </div>
          
          <div className="card">
            <h3>💳 Gestión de Suscripción</h3>
            <p>Administra tu plan de suscripción y descubre nuevas opciones.</p>
          </div>
          
          <div className="card">
            <h3>📝 Mis Playlists</h3>
            <p>Crea y organiza tus playlists personalizadas con tus canciones favoritas.</p>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3>Características Principales</h3>
        <ul>
          <li>🎵 Streaming de música en alta calidad</li>
          <li>📱 Aplicación responsive para todos los dispositivos</li>
          <li>🔍 Búsqueda avanzada de música</li>
          <li>🎨 Playlists personalizadas</li>
          <li>💎 Planes premium sin anuncios</li>
          <li>📊 Recomendaciones personalizadas</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;