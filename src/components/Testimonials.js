import React, { useRef } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Aïcha Traoré",
    text: "Un service impeccable ! La nourriture était délicieuse et livrée à l'heure. Je recommande vivement Cordon Bleu pour tous vos événements.",
    avatar: "AT"
  },
  {
    id: 2,
    name: "Mamadou Ouédraogo",
    text: "J'ai commandé pour l'anniversaire de ma fille, tout le monde a adoré ! Merci pour votre professionnalisme et la qualité de vos plats.",
    avatar: "MO"
  },
  {
    id: 3,
    name: "Fatou Sawadogo",
    text: "Très bonne expérience, plats savoureux et service client au top. Les petits fours étaient un vrai délice !",
    avatar: "FS"
  },
  {
    id: 4,
    name: "Ibrahim Kaboré",
    text: "Service de qualité, livraison ponctuelle et plats excellents. Je commande régulièrement chez Cordon Bleu.",
    avatar: "IK"
  },
  {
    id: 5,
    name: "Salimata Compaoré",
    text: "Les lasagnes étaient exceptionnelles ! Parfait pour notre dîner en famille. Merci pour cette belle découverte culinaire.",
    avatar: "SC"
  },
  {
    id: 6,
    name: "Boukary Zongo",
    text: "Un régal pour nos papilles ! Le service est professionnel et les plats sont préparés avec soin. Je recommande vivement.",
    avatar: "BZ"
  }
];

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'star-filled' : 'star-empty'}`}
      >
        ★
      </span>
    ));
  };

  // Icons SVG (remplace lucide-react)
  const ChevronLeftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15,18 9,12 15,6"></polyline>
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9,18 15,12 9,6"></polyline>
    </svg>
  );

  return (
    <section id="testimonials" className="testimonials-container">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">Témoignages</h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-carousel">
          {/* Navigation Buttons */}
          <div className="carousel-navigation">
            <button
              className="nav-button"
              onClick={() => scroll('left')}
            >
              <ChevronLeftIcon />
            </button>
            <button
              className="nav-button"
              onClick={() => scroll('right')}
            >
              <ChevronRightIcon />
            </button>
          </div>

          {/* Testimonials Container */}
          <div className="testimonials-scroll-wrapper">
            <div
              ref={scrollContainerRef}
              className="testimonials-scroll-container"
            >
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Decoration */}
                  <div className="card-decoration"></div>
                  
                  {/* Content */}
                  <div className="card-content">
                    {/* Quote Icon */}
                    <div className="quote-icon">"</div>
                    
                    {/* Rating */}
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="testimonial-text">
                      {testimonial.text}
                    </p>
                    
                    {/* Author Info */}
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        {testimonial.avatar}
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.event}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="hover-border"></div>
                </div>
              ))}
            </div>

            {/* Gradient Fade Effects */}
            <div className="fade-left"></div>
            <div className="fade-right"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <div className="cta-badge">
            <span>✨</span>
            <span>Rejoignez nos clients satisfaits</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;