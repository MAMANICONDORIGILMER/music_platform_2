# Music Subscription App - Frontend React

Aplicación web de gestión de suscripciones para plataforma de streaming de música, desarrollada con React.

## 🚀 Características

- **Catálogo de Música**: Exploración de canciones, álbumes y artistas
- **Gestión de Suscripciones**: Planes gratuitos y premium
- **Playlists Personalizadas**: Creación y gestión de listas de reproducción
- **Interfaz Responsive**: Optimizada para todos los dispositivos
- **Conexión API**: Integrada con backend .NET Core

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Backend API ejecutándose en `https://localhost:7000`

## ⚙️ Instalación y Configuración

1. **Clonar/descargar el proyecto**
   ```bash
   cd react_fronted
   ```

2. **Instalar dependencias** (ya instaladas)
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - El archivo `.env` ya está configurado
   - Modificar `REACT_APP_API_URL` si tu API está en otra URL

4. **Ejecutar la aplicación**
   ```bash
   npm start
   ```

5. **Abrir en el navegador**
   - La aplicación se abrirá automáticamente en `http://localhost:3000`

## 🔗 Endpoints de API Utilizados

La aplicación se conecta con los siguientes endpoints del backend:

### Música
- `GET /api/music` - Listar catálogo de música
- `GET /api/music/{id}` - Obtener detalles de música

### Suscripciones
- `POST /api/subscriptions` - Crear/renovar suscripción
- `GET /api/subscriptions/{userId}` - Ver suscripción del usuario
- `DELETE /api/subscriptions/{id}` - Cancelar suscripción

### Playlists
- `POST /api/playlists` - Crear playlist
- `GET /api/playlists/{userId}` - Listar playlists del usuario

### Reportes
- `POST /api/reports` - Generar reportes

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── MusicCatalog.js      # Catálogo de música
│   ├── SubscriptionManager.js # Gestión de suscripciones
│   ├── PlaylistManager.js    # Gestión de playlists
│   └── Navigation.js        # Navegación principal
├── pages/               # Páginas principales
│   ├── Home.js             # Página de inicio
│   ├── MusicPage.js        # Página del catálogo
│   ├── SubscriptionPage.js # Página de suscripciones
│   └── PlaylistsPage.js    # Página de playlists
├── services/            # Servicios de API
│   ├── apiClient.js        # Cliente HTTP base
│   └── apiService.js       # Servicios específicos
├── App.js              # Componente principal
├── index.js            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎨 Funcionalidades Implementadas

### ✅ Completadas
- Estructura básica del proyecto React
- Servicios de conexión con API
- Componentes principales (Música, Suscripciones, Playlists)
- Navegación con React Router
- Interfaz responsive con CSS personalizado
- Manejo de estados de carga y errores

### 🔄 Para Desarrollo Futuro
- Autenticación de usuarios
- Reproductor de música integrado
- Búsqueda avanzada
- Recomendaciones personalizadas
- Modo offline
- Notificaciones push

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **React Router** - Navegación
- **Axios** - Cliente HTTP
- **CSS3** - Estilos
- **ES6+** - JavaScript moderno

## 🚨 Notas Importantes

1. **Backend Requerido**: Esta aplicación necesita el backend API ejecutándose
2. **CORS**: Asegúrate de que el backend permita solicitudes desde `http://localhost:3000`
3. **Variables de Entorno**: Modifica `.env` según tu configuración
4. **Datos de Prueba**: Los componentes manejan casos donde la API retorna datos vacíos

## 🐛 Solución de Problemas

- **Error de conexión API**: Verificar que el backend esté ejecutándose
- **CORS errors**: Configurar CORS en el backend para permitir `localhost:3000`
- **Dependencias**: Si hay errores, ejecutar `npm install` nuevamente

## 📞 Soporte

Para problemas o mejoras, revisar la documentación del backend o contactar al equipo de desarrollo.