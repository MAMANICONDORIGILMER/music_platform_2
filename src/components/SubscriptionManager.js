import React, { useState, useEffect } from 'react';
import { subscriptionService } from '../services/apiService';

const SubscriptionManager = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  
  // Este sería el ID del usuario actual (en una app real vendría del estado de autenticación)
  const currentUserId = 1;

  useEffect(() => {
    loadUserSubscription();
  }, []);

  const loadUserSubscription = async () => {
    try {
      setLoading(true);
      const subscriptionData = await subscriptionService.getUserSubscription(currentUserId);
      setSubscription(subscriptionData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSubscription = async (planType) => {
    try {
      const newSubscription = await subscriptionService.createSubscription({
        userId: currentUserId,
        planType: planType,
        startDate: new Date().toISOString()
      });
      setSubscription(newSubscription);
      setShowCreateForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancelSubscription = async () => {
    if (!subscription) return;
    
    try {
      await subscriptionService.cancelSubscription(subscription.id);
      setSubscription(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Cargando suscripción...</div>;

  return (
    <div className="card">
      <h2>Gestión de Suscripción</h2>
      
      {error && <div className="error">Error: {error}</div>}
      
      {subscription ? (
        <div>
          <h3>Suscripción Activa</h3>
          <p><strong>Plan:</strong> {subscription.planType}</p>
          <p><strong>Estado:</strong> {subscription.status}</p>
          <p><strong>Fecha de inicio:</strong> {new Date(subscription.startDate).toLocaleDateString()}</p>
          <p><strong>Fecha de vencimiento:</strong> {subscription.endDate ? new Date(subscription.endDate).toLocaleDateString() : 'N/A'}</p>
          
          <div style={{ marginTop: '1rem' }}>
            <button className="btn btn-secondary" onClick={handleCancelSubscription}>
              Cancelar Suscripción
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>No tienes una suscripción activa</h3>
          <p>Elige un plan para comenzar a disfrutar de nuestra música.</p>
          
          {!showCreateForm ? (
            <button className="btn" onClick={() => setShowCreateForm(true)}>
              Ver Planes
            </button>
          ) : (
            <div>
              <h4>Planes Disponibles</h4>
              <div className="grid">
                <div className="card">
                  <h5>Plan Gratuito</h5>
                  <p>Acceso limitado con anuncios</p>
                  <button className="btn" onClick={() => handleCreateSubscription('free')}>
                    Seleccionar Gratuito
                  </button>
                </div>
                <div className="card">
                  <h5>Plan Premium</h5>
                  <p>$9.99/mes - Acceso completo sin anuncios</p>
                  <button className="btn" onClick={() => handleCreateSubscription('premium')}>
                    Seleccionar Premium
                  </button>
                </div>
                <div className="card">
                  <h5>Plan Familiar</h5>
                  <p>$14.99/mes - Hasta 6 cuentas</p>
                  <button className="btn" onClick={() => handleCreateSubscription('family')}>
                    Seleccionar Familiar
                  </button>
                </div>
              </div>
              <button className="btn btn-secondary" onClick={() => setShowCreateForm(false)}>
                Cancelar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubscriptionManager;