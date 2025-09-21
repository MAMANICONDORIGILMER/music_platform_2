import React, { useState, useEffect } from 'react';
import { musicService } from '../services/apiService';

const MusicCatalog = () => {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMusic();
  }, []);

  const loadMusic = async () => {
    try {
      setLoading(true);
      const musicData = await musicService.getMusic();
      setMusic(musicData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Cargando catálogo...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="card">
      <h2>Catálogo de Música</h2>
      {music.length === 0 ? (
        <p>No hay música disponible en el catálogo.</p>
      ) : (
        <div className="grid">
          {music.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title || item.name}</h3>
              <p><strong>Artista:</strong> {item.artist}</p>
              <p><strong>Álbum:</strong> {item.album}</p>
              <p><strong>Duración:</strong> {item.duration || 'N/A'}</p>
              <button className="btn">
                Reproducir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicCatalog;