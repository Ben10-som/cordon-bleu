import React, { useState, useEffect } from 'react';
import './App.css';

import Hero from './components/Hero';
import Menu from './components/Menu';
import ServiceTraiteur from './components/ServiceTraiteur';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import Chatbot from './components/Chatbot';
import Testimonials from './components/Testimonials';


function App() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  // Simuler le comptage des visiteurs (en réalité, vous utiliseriez un service comme Google Analytics)
  useEffect(() => {
    const count = localStorage.getItem('visitorCount') || 0;
    setVisitorCount(parseInt(count) + 1);
    localStorage.setItem('visitorCount', parseInt(count) + 1);
  }, []);

  const handleOrderClick = (dish) => {
    setSelectedDish(dish);
    setIsOrderModalOpen(true);
  };

  const handleOrderSubmit = () => {
    const count = localStorage.getItem('orderCount') || 0;
    setOrderCount(parseInt(count) + 1);
    localStorage.setItem('orderCount', parseInt(count) + 1);
    setIsOrderModalOpen(false);
    setSelectedDish(null);
  };

  return (
    <div className="App">
     
      <Hero />
      <Menu onOrderClick={handleOrderClick} />
      <ServiceTraiteur />
      <Testimonials />
      <Contact />
    
      <Footer 
        visitorCount={visitorCount} 
        orderCount={orderCount} 
      />
        <Chatbot />
      
      {isOrderModalOpen && (
        <OrderModal
          dish={selectedDish}
          onClose={() => setIsOrderModalOpen(false)}
          onSubmit={handleOrderSubmit}
        />
      )}
    </div>
  );
}

export default App;
