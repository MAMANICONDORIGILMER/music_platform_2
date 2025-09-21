import apiClient from './apiClient';

// Servicio para gestión de música
export const musicService = {
  // GET /music - Listar catálogo de música
  getMusic: async () => {
    try {
      const response = await apiClient.get('/music');
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener el catálogo de música');
    }
  },

  // GET /music/{id} - Detalle de canción/álbum/artista
  getMusicById: async (id) => {
    try {
      const response = await apiClient.get(`/music/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener los detalles de la música con ID: ${id}`);
    }
  }
};

// Servicio para gestión de suscripciones
export const subscriptionService = {
  // POST /subscriptions - Crear o renovar suscripción
  createSubscription: async (subscriptionData) => {
    try {
      const response = await apiClient.post('/subscriptions', subscriptionData);
      return response.data;
    } catch (error) {
      throw new Error('Error al crear la suscripción');
    }
  },

  // GET /subscriptions/{userId} - Ver suscripción activa del usuario
  getUserSubscription: async (userId) => {
    try {
      const response = await apiClient.get(`/subscriptions/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener la suscripción del usuario: ${userId}`);
    }
  },

  // DELETE /subscriptions/{id} - Cancelar suscripción
  cancelSubscription: async (subscriptionId) => {
    try {
      const response = await apiClient.delete(`/subscriptions/${subscriptionId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al cancelar la suscripción: ${subscriptionId}`);
    }
  }
};

// Servicio para gestión de playlists
export const playlistService = {
  // POST /playlists - Crear playlist
  createPlaylist: async (playlistData) => {
    try {
      const response = await apiClient.post('/playlists', playlistData);
      return response.data;
    } catch (error) {
      throw new Error('Error al crear la playlist');
    }
  },

  // GET /playlists/{userId} - Listar playlists del usuario
  getUserPlaylists: async (userId) => {
    try {
      const response = await apiClient.get(`/playlists/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener las playlists del usuario: ${userId}`);
    }
  }
};

// Servicio para reportes
export const reportService = {
  // POST /reports - Generar reportes de uso y suscripciones
  generateReport: async (reportData) => {
    try {
      const response = await apiClient.post('/reports', reportData);
      return response.data;
    } catch (error) {
      throw new Error('Error al generar el reporte');
    }
  }
};