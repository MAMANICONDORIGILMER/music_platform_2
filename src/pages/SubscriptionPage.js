import React from 'react';
import SubscriptionManager from '../components/SubscriptionManager';

const SubscriptionPage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>💳 Gestión de Suscripción</h1>
        <p>Administra tu plan y descubre nuevas opciones</p>
      </div>
      
      <SubscriptionManager />
    </div>
  );
};

export default SubscriptionPage;