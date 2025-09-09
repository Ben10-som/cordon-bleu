import React from 'react';
import './Footer.css';

const Footer = ({ visitorCount, orderCount }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🍽️ Cordon Bleu</h3>
            <p>Votre service de restauration à domicile d'exception. Des plats délicieux livrés chez vous.</p>
          </div>
          
          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 +226 64 32 33 96</p>
            <p>📞 +226 63 61 81 16</p>
            <p>📧 cordonbleubf@gmail.com</p>
            <p>📍 Ouaga 2000, Ouagadougou</p>
          </div>
          
          <div className="footer-section">
            <h4>Statistiques</h4>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">{visitorCount}</span>
                <span className="stat-label">Visiteurs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{orderCount}</span>
                <span className="stat-label">Commandes</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Cordon Bleu. Tous droits réservés.</p>
          <p>Fait avec ❤️ pour vous servir</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
