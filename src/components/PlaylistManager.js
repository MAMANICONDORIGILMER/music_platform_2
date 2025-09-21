import React, { useState, useEffect } from 'react';
import { playlistService } from '../services/apiService';

const PlaylistManager = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  
  // Este sería el ID del usuario actual (en una app real vendría del estado de autenticación)
  const currentUserId = 1;

  useEffect(() => {
    loadUserPlaylists();
  }, []);

  const loadUserPlaylists = async () => {
    try {
      setLoading(true);
      const playlistData = await playlistService.getUserPlaylists(currentUserId);
      setPlaylists(playlistData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();
    if (!newPlaylistName.trim()) return;

    try {
      const newPlaylist = await playlistService.createPlaylist({
        name: newPlaylistName,
        userId: currentUserId,
        description: '',
        songs: []
      });
      
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName('');
      setShowCreateForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Cargando playlists...</div>;

  return (
    <div className="card">
      <h2>Mis Playlists</h2>
      
      {error && <div className="error">Error: {error}</div>}
      
      <div style={{ marginBottom: '1rem' }}>
        {!showCreateForm ? (
          <button className="btn" onClick={() => setShowCreateForm(true)}>
            Nueva Playlist
          </button>
        ) : (
          <form onSubmit={handleCreatePlaylist}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Nombre de la playlist"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                style={{
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  flex: 1
                }}
              />
              <button type="submit" className="btn">
                Crear
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setShowCreateForm(false);
                  setNewPlaylistName('');
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>

      {playlists.length === 0 ? (
        <p>No tienes playlists creadas. ¡Crea tu primera playlist!</p>
      ) : (
        <div className="grid">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="card">
              <h3>{playlist.name}</h3>
              <p><strong>Descripción:</strong> {playlist.description || 'Sin descripción'}</p>
              <p><strong>Canciones:</strong> {playlist.songs?.length || 0}</p>
              <p><strong>Creada:</strong> {playlist.createdDate ? new Date(playlist.createdDate).toLocaleDateString() : 'N/A'}</p>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn">
                  Ver Playlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistManager;