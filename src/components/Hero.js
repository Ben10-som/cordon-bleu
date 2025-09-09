// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero">
      {/* Background decorative elements */}
      <div className="hero-bg">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Floating food icons */}
      <div className="floating-icons">
        <div className="floating-icon icon-1">🍽️</div>
        <div className="floating-icon icon-2">🥘</div>
        <div className="floating-icon icon-3">👨‍🍳</div>
        <div className="floating-icon icon-4">🍷</div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          
          {/* Left content */}
          <div className="hero-text">
            <div className="hero-badge">
              <span>Service de Restauration</span>
            </div>
            
            <h1 className="hero-title">Cordon Bleu</h1>
            
           

            <p className="hero-description">
              Découvrez notre cuisine maison préparée avec amour et des ingrédients frais. 
              Commandez en ligne et recevez vos plats préférés directement à votre domicile.
            </p>

            {/* Action buttons */}
            <div className="hero-buttons">
              <button 
                onClick={() => scrollTo('menu')}
                className="btn btn-primary"
              >
                <span>Voir le Menu</span>
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button 
                onClick={() => scrollTo('service-traiteur')}
                className="btn btn-secondary"
              >
                <span>Service Traiteur</span>
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>



              <button 
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
              >
                <span>📱</span>
                <span>Contactez-nous</span>
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Satisfaits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Plats au Menu</div>
              </div>
             
            </div>
          </div>

          {/* Right content - Image section */}
          <div className="hero-image">
            <div className="image-container">
              {/* Main card */}
              <div className="main-card">
                <div className="card-overlay"></div>
                <div className="card-content">
                  <div className="card-icon">
  <img
    src="/logo.jpg"
    alt="Logo Cordon Bleu"
    className="logo-round"
  />
</div>
                  <h3 className="card-title">Cuisine d'Exception</h3>
                  <p className="card-description">Des plats préparés avec passion par nos chefs expérimentés</p>
                  <div className="availability-badge">
                    <span className="status-dot"></span>
                    <span>Disponible maintenant</span>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
           

              <div className="floating-card card-2">
                <div className="floating-card-icon">🚚</div>
                <div className="floating-card-label">Livraison</div>
              </div>

            
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z" fill="url(#wave-gradient)"></path>
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="50%" stopColor="#fecaca" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;