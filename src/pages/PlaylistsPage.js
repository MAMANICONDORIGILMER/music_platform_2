import React from 'react';
import PlaylistManager from '../components/PlaylistManager';

const PlaylistsPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>📝 Mis Playlists</h1>
        <p>Crea y gestiona tus listas de reproducción favoritas</p>
      </div>
      
      <PlaylistManager />
    </div>
  );
};

export default PlaylistsPage;