import React from 'react';
import MusicCatalog from '../components/MusicCatalog';

const MusicPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>🎵 Catálogo de Música</h1>
        <p>Descubre tu próxima canción favorita</p>
      </div>
      
      <MusicCatalog />
    </div>
  );
};

export default MusicPage;