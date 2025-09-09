import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contactez-Nous</h2>
            <p>N'hésitez pas à nous contacter pour toute question ou commande spéciale.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h3>Téléphone</h3>
                  <p>+226 64 32 33 96</p>
                  <p>+226 63 61 81 16</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <p>cordonbleubf@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h3>Adresse</h3>
                  <p>Ouaga 2000, Ouagadougou<br/>Burkina Faso</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <h3>Horaires</h3>
                  <p>Toujours ouvert</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-actions">
            <h3>Commandez Maintenant</h3>
            <p>Choisissez votre méthode de commande préférée :</p>
            
            <div className="contact-buttons">
              <a 
                href="https://wa.me/22664323396?text=Bonjour, je souhaite passer une commande chez Cordon Bleu" 
                className="btn-whatsapp-contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📱</span>
                Commander sur WhatsApp
              </a>
              
              <a 
                href="tel:+22664323396" 
                className="btn-phone"
              >
                <span>📞</span>
                Appeler Directement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
