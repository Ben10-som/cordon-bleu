import React, { useState, useEffect } from 'react';
import './ServiceTraiteur.css';

const images = [
  '/images/traiteur1.jpg',
  '/images/traiteur2.jpg',
  '/images/traiteur3.jpg'
];

const ServiceTraiteur = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  // Auto-défilement toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="service-traiteur" className="service-traiteur-container">
      <h2>Service Traiteur</h2>
      <p>
        Profitez de notre service traiteur pour vos événements privés ou professionnels.<br />
        Nous proposons des menus personnalisés, adaptés à vos besoins et à votre budget.<br />
        Contactez-nous pour organiser un moment gourmand et convivial !
      </p>
      <div className="traiteur-carousel">
        <button className="carousel-btn" onClick={prevImage}>‹</button>
        <img
          src={images[current]}
          alt={`Service traiteur ${current + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn" onClick={nextImage}>›</button>
      </div>
      <a
        href="https://wa.me/22664323396?text=Bonjour, je souhaite réserver un service traiteur chez Cordon Bleu"
        className="btn-whatsapp-large"
        target="_blank"
        rel="noopener noreferrer"
      >
        Réserver un service traiteur
      </a>
    </section>
  );
};

export default ServiceTraiteur;