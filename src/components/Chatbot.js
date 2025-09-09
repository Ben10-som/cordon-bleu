import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      from: "bot", 
      text: "Bonjour 👋 ! Je suis l'assistant virtuel de Cordon Bleu. Comment puis-je vous aider aujourd'hui ?",
      options: ["Voir le menu", "Passer commande", "Informations contact", "À propos"]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Base de connaissances basée sur vos données
  const menuData = {
    "Petits Fours": [
      { name: "Neems précuits", price: "25 pièces - 4.500 FCFA" },
      { name: "Neems cuits", price: "25 pièces - 5.000/6.000 FCFA" },
      { name: "Pastels précuits", price: "25 pièces - 4.500 FCFA" },
      { name: "Pastels cuits", price: "25 pièces - 5.500 FCFA" },
      { name: "Mini Burgers", price: "20 pièces - 13.000 FCFA / 50 pièces - 25.000 FCFA" },
      { name: "Samoussas", price: "25 pièces - 6.000 FCFA / 50 pièces - 12.000 FCFA" },
      { name: "Mini Pizzas", price: "25 pièces - 7.500/8.500/10.000 FCFA" },
      { name: "Quiches", price: "20 pièces - 10.000 FCFA" },
      { name: "Croquettes de pommes de terre", price: "25 pièces - 8.000 FCFA" }
    ],
    "Plats Gratinés": [
      { name: "Haricot vert", price: "10.000 FCFA" },
      { name: "Gratin", price: "12.500/17.500/20.000 FCFA" },
      { name: "Lasagnes", price: "15.000 FCFA" },
      { name: "Riz classique", price: "15.000 FCFA" },
      { name: "Riz cantonnais", price: "20.000 FCFA" }
    ],
    "Viandes": [
      { name: "Poulet de chair au four", price: "4.500 FCFA" },
      { name: "Poulet braisé", price: "4.500 FCFA" },
      { name: "Mouton au four", price: "25.000 FCFA" },
      { name: "Mouton fumé", price: "25.000 FCFA" },
      { name: "Brochettes de filet", price: "25.000 FCFA" }
    ]
  };

  const contactInfo = {
    phones: ["+226 64 32 33 96", "+226 63 61 81 16"],
    email: "cordonbleubf@gmail.com",
    address: "Ouaga 2000, Ouagadougou",
    whatsapp: "+226 64 32 33 96"
  };

  const simulateTyping = (callback, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const addBotMessage = (text, options = null) => {
    setMessages(prev => [...prev, { from: "bot", text, options }]);
  };

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { from: "user", text: option }]);
    processMessage(option);
  };

  const processMessage = (message) => {
    const lowerMessage = message.toLowerCase();
    
    simulateTyping(() => {
      if (lowerMessage.includes("menu") || lowerMessage.includes("carte")) {
        addBotMessage(
          "Voici nos catégories disponibles 🍽️:",
          ["Petits Fours", "Plats Gratinés", "Viandes", "Tout le menu"]
        );
      }
      else if (lowerMessage.includes("petits fours")) {
        const items = menuData["Petits Fours"];
        let menuText = "🥟 **Petits Fours** :\n\n";
        items.forEach(item => {
          menuText += `• ${item.name} - ${item.price}\n`;
        });
        addBotMessage(menuText, ["Passer commande", "Autre catégorie", "Contact"]);
      }
      else if (lowerMessage.includes("plats gratinés") || lowerMessage.includes("gratinés")) {
        const items = menuData["Plats Gratinés"];
        let menuText = "🍲 **Plats Gratinés** :\n\n";
        items.forEach(item => {
          menuText += `• ${item.name} - ${item.price}\n`;
        });
        addBotMessage(menuText, ["Passer commande", "Autre catégorie", "Contact"]);
      }
      else if (lowerMessage.includes("viandes") || lowerMessage.includes("viande")) {
        const items = menuData["Viandes"];
        let menuText = "🍖 **Viandes** :\n\n";
        items.forEach(item => {
          menuText += `• ${item.name} - ${item.price}\n`;
        });
        addBotMessage(menuText, ["Passer commande", "Autre catégorie", "Contact"]);
      }
      else if (lowerMessage.includes("tout le menu")) {
        let fullMenu = "📋 **Menu Complet** :\n\n";
        Object.entries(menuData).forEach(([category, items]) => {
          fullMenu += `**${category}** :\n`;
          items.forEach(item => {
            fullMenu += `• ${item.name} - ${item.price}\n`;
          });
          fullMenu += "\n";
        });
        addBotMessage(fullMenu, ["Passer commande", "Contact"]);
      }
      else if (lowerMessage.includes("commande") || lowerMessage.includes("commander")) {
        addBotMessage(
          `Pour passer commande, contactez-nous directement :\n\n📱 WhatsApp : ${contactInfo.whatsapp}\n📞 Tel : ${contactInfo.phones.join(" ou ")}\n📧 Email : ${contactInfo.email}\n\nNotre équipe vous répondra rapidement ! 🚀`,
          ["Voir menu", "Contact", "À propos"]
        );
      }
      else if (lowerMessage.includes("contact") || lowerMessage.includes("téléphone") || lowerMessage.includes("phone")) {
        addBotMessage(
          `📞 **Nos Coordonnées** :\n\n• Téléphone : ${contactInfo.phones.join(" / ")}\n• Email : ${contactInfo.email}\n• Adresse : ${contactInfo.address}\n• WhatsApp : ${contactInfo.whatsapp}\n\nNous sommes disponibles pour vous servir ! ✨`,
          ["Passer commande", "Voir menu", "À propos"]
        );
      }
      else if (lowerMessage.includes("à propos") || lowerMessage.includes("apropos") || lowerMessage.includes("info")) {
        addBotMessage(
          "🍽️ **Cordon Bleu** - Votre service de restauration à domicile d'exception !\n\nNous préparons avec amour des plats délicieux et les livrons directement chez vous. Spécialisés dans les petits fours, plats gratinés et viandes de qualité.\n\n✨ Fait avec ❤️ pour vous servir",
          ["Voir menu", "Passer commande", "Contact"]
        );
      }
      else if (lowerMessage.includes("prix") || lowerMessage.includes("tarif")) {
        addBotMessage(
          "💰 Nos prix varient selon les plats :\n\n• Petits fours : 4.500 - 25.000 FCFA\n• Plats gratinés : 10.000 - 20.000 FCFA\n• Viandes : 4.500 - 25.000 FCFA\n\nVoulez-vous voir le détail d'une catégorie ?",
          ["Petits Fours", "Plats Gratinés", "Viandes"]
        );
      }
      else if (lowerMessage.includes("livraison") || lowerMessage.includes("delivery")) {
        addBotMessage(
          `🚗 **Livraison** :\n\nNous livrons dans la région de Ouagadougou. Contactez-nous pour connaître les frais et délais de livraison selon votre localisation.\n\n📞 ${contactInfo.phones[0]} pour plus d'infos !`,
          ["Passer commande", "Contact", "Voir menu"]
        );
      }
      else if (lowerMessage.includes("merci") || lowerMessage.includes("thanks")) {
        addBotMessage(
          "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions !",
          ["Voir menu", "Passer commande", "Contact"]
        );
      }
      else {
        addBotMessage(
          "Je n'ai pas bien compris 😅 Voici ce que je peux vous aider à faire :",
          ["Voir le menu", "Passer commande", "Informations contact", "À propos"]
        );
      }
    });
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { from: "user", text: input }]);
    processMessage(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Icons en SVG (remplace lucide-react)
  const MessageCircleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );

  const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m18 6-12 12M6 6l12 12"/>
    </svg>
  );

  const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m22 2-7 20-4-9-9-4Z"/>
      <path d="M22 2 11 13"/>
    </svg>
  );

  return (
    <div className="chatbot-container">
      {/* Icône flottante */}
      <button 
        className={`chatbot-icon ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XIcon />
        ) : (
          <div className="pulse">
            <MessageCircleIcon />
          </div>
        )}
      </button>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-avatar">
              <span>🍽️</span>
            </div>
            <div>
              <h3 className="chatbot-title">Cordon Bleu</h3>
              <p className="chatbot-subtitle">Assistant virtuel</p>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                <div className="message-content">
                  {msg.text}
                  {msg.options && (
                    <div className="message-options">
                      {msg.options.map((option, idx) => (
                        <button
                          key={idx}
                          className="option-button"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-content">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <div className="input-container">
              <input
                className="input-field"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Écrivez votre message..."
              />
              <button
                className="send-button"
                onClick={handleSend}
                disabled={!input.trim()}
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;