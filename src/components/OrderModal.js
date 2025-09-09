import React, { useState } from 'react';
import './OrderModal.css';

const OrderModal = ({ dish, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer le message WhatsApp avec les détails de la commande
    const message = `!! NOUVELLE COMMANDE !!

Plat commandé: ${dish.name} (${dish.price})
Client: ${formData.name}
Téléphone: ${formData.phone}
Date souhaitée: ${formData.date}
Heure souhaitée: ${formData.time}
Adresse: ${formData.address}
Notes: ${formData.notes}

`;

    // Ouvrir WhatsApp avec le message pré-rempli
    const whatsappUrl = `https://wa.me/22663618116?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Soumettre aussi via Formspree (service de formulaire externe)
    const formspreeData = {
      'Plat': dish.name,
      'Prix': dish.price,
      'Nom': formData.name,
      'Téléphone': formData.phone,
      'Date': formData.date,
      'Heure': formData.time,
      'Adresse': formData.address,
      'Notes': formData.notes
    };

    // Envoyer les données à Formspree (remplacez par votre endpoint Formspree)
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formspreeData)
    }).catch(error => {
      console.log('Erreur lors de l\'envoi du formulaire:', error);
    });

    onSubmit();
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Commander: {dish.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="dish-summary">
            <div className="dish-image-modal">
              <img 
                src={dish.image} 
                alt={dish.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="dish-placeholder-modal" style={{display: 'none'}}>
                <span className="dish-emoji">🍽️</span>
              </div>
            </div>
            <div>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className="price">{dish.price}</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Votre nom complet"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Numéro de téléphone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="06 12 34 56 78"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date souhaitée *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={getTomorrowDate()}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="time">Heure souhaitée *</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choisir une heure</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>
            

            <div className="form-group">
              <label htmlFor="address">Adresse de livraison *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Votre adresse complète avec code postal"
                rows="3"
              />
              <button
                type="button"
                className="btn-location"
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        const { latitude, longitude } = position.coords;
                        setFormData(prev => ({
                          ...prev,
                          address: `Ma localisation : https://www.google.com/maps?q=${latitude},${longitude}`
                        }));
                      },
                      (error) => {
                        alert("Impossible d'obtenir la localisation.");
                      }
                    );
                  } else {
                    alert("La géolocalisation n'est pas supportée par votre navigateur.");
                  }
                }}
              >
                📍 Utiliser ma localisation
              </button>
            </div>

            
            <div className="form-group">
              <label htmlFor="notes">Notes spéciales</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Allergies, préférences, instructions spéciales..."
                rows="2"
              />
            </div>
            
            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn-submit">
                📱 Envoyer sur WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
