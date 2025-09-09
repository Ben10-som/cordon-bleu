import React, { useRef } from 'react';
import './Menu.css';

const Menu = ({ onOrderClick }) => {
  const scrollRefs = useRef({});

  const scrollLeft = (category) => {
    const container = scrollRefs.current[category];
    if (container) {
      container.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = (category) => {
    const container = scrollRefs.current[category];
    if (container) {
      container.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  // Données des plats - modifie les chemins d'image selon tes fichiers
  const dishes = [
  // 🟠 PETITS FOURS
  {
    id: 1, 
    name: "Neems précuits",
    description: "Petits fours Neems précuits, prêts à frire",
    price: "25 pièces - 4.500 FCFA",
    category: "Petits Fours",
    image: "/images/neems_precuit.jpg"
  },
  {
    id: 2,
    name: "Neems cuits",
    description: "Petits fours Neems déjà frits et prêts à déguster",
    price: "25 pièces - 5.000 FCFA / 6.000 FCFA",
    category: "Petits Fours",
    image: "/images/neems_cuit.jpg"
  },
  {
    id: 3,
    name: "Pastels précuits",
    description: "Pastels précuits, à réchauffer chez soi",
    price: "25 pièces - 4.500 FCFA",
    category: "Petits Fours",
    image: "/images/pastels_precuit.jpg"
  },
  {
    id: 4,
    name: "Pastels cuits",
    description: "Pastels cuits et prêts à servir",
    price: "25 pièces - 5.500 FCFA",
    category: "Petits Fours",
    image: "/images/pastels.jpg"
  },
  {
    id: 5,
    name: "Mini Burgers",
    description: "Mini burgers savoureux, parfaits pour vos événements",
    price: "20 pièces - 13.000 FCFA / 50 pièces - 25.000 FCFA",
    category: "Petits Fours",
    image: "/images/mini_burger.jpg"
  },
  {
    id: 6,
    name: "Samoussas",
    description: "Samoussas croustillants farcis à la viande ou légumes",
    price: "25 pièces - 6.000 FCFA / 50 pièces - 12.000 FCFA",
    category: "Petits Fours",
    image: "/images/samoussas.jpg"
  },
  {
    id: 7,
    name: "Mini Pizzas",
    description: "Mini pizzas garnies au fromage et sauce tomate",
    price: "25 pièces - 7.500 / 8.500 / 10.000 FCFA",
    category: "Petits Fours",
    image: "/images/minipizza.jpg"
  },
  {
    id: 8,
    name: "Quiches",
    description: "Mini quiches garnies aux légumes et fromage",
    price: "20 pièces - 10.000 FCFA",
    category: "Petits Fours",
    image: "/images/quiches.jpg"
  },
  {
    id: 9,
    name: "Croquettes de pommes de terre",
    description: "Croquettes croustillantes de pommes de terre",
    price: "25 pièces - 8.000 FCFA",
    category: "Petits Fours",
    image: "/images/croquettes.jpg"
  },

  // 🟠 PLATS GRATINÉS

  {
    id: 11,
    name: "Gratin",
    description: "Gratin savoureux aux légumes ou pommes de terre",
    price: "12.500 / 17.500 / 20.000 FCFA",
    category: "Plats Gratinés",
    image: "/images/gratins.jpg"
  },
  {
    id: 12,
    name: "Lasagnes",
    description: "Lasagnes maison avec viande hachée, sauce tomate et béchamel",
    price: "15.000 FCFA",
    category: "Plats Gratinés",
    image: "/images/lasagne.jpg"
  },

  {
    id: 14,
    name: "Riz cantonnais",
    description: "Riz cantonnais savoureux et garni",
    price: "20.000 FCFA",
    category: "Plats Gratinés",
    image: "/images/Riz_cantonais.jpg"
  }

    // 🟠 Viandes 

    ,
  {
    id: 15,
    name: "Poulet de chair au four",
    description: "Poulet de chair rôti au four",
    price: "4.500 FCFA",
    category: "Viandes",
    image: "/images/Poulet_de_chair_au_four.jpg"
  }
  ,
  {
    id: 16,
    name: "Poulet braisé",
    description: "Poulet braisé savoureux et juteux",
    price: "4.500 FCFA",
    category: "Viandes",
    image: "/images/Poulet_braisé.jpg"
  }
  ,
  {
    id: 17,
    name: "Mouton au four",
    description: "Mouton rôti au four, tendre et savoureux",
    price: "25.000 FCFA",
    category: "Viandes",
    image: "/images/Mouton_au_four.jpg"
  }
   ,
  {
    id: 18,
    name: "Mouton fumé",
    description: "Mouton fumé, tendre et savoureux",
    price: "25.000 FCFA",
    category: "Viandes",
    image: "/images/Mouton_fumé.jpg"
  }

   ,
  {
    id: 19,
    name: "Brochettes de filet",
    description: "Brochettes de filet tendre, marinées et grillées",
    price: "25.000 FCFA",
    category: "Viandes",
    image: "/images/Brochettes_de_filet.jpg"
  }
  
  
];

;

  const categories = [...new Set(dishes.map(dish => dish.category))];

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <h2>Menu</h2>
          <p>Découvrez nos délicieux plats préparés avec amour</p>
        </div>

        {categories.map(category => (
          <div key={category} className="menu-category">
            <h3 className="category-title">{category}</h3>
            <div className="dishes-container">
              <button 
                className="scroll-btn scroll-left" 
                onClick={() => scrollLeft(category)}
              >
                ‹
              </button>
              <div 
                className="dishes-grid" 
                ref={el => scrollRefs.current[category] = el}
              >
                {dishes
                  .filter(dish => dish.category === category)
                  .map(dish => (
                    <div key={dish.id} className="dish-card">
                                      <div className="dish-image">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        style={{
                          width: '100%',
                          borderRadius: '12px',
                          objectFit: 'cover',
                          height: '160px',
                          background: '#f8f8f8'
                        }}
                        onError={(e) => {
                          e.target.src = '/images/placeholder.jpg'; // image de secours si besoin
                        }}
                      />
                    </div>  
                      <div className="dish-content">
                        <h4 className="dish-name">{dish.name}</h4>
                        <p className="dish-description">{dish.description}</p>
                        <div className="dish-footer">
                          <span className="dish-price">{dish.price}</span>
                          <button 
                            className="btn-order"
                            onClick={() => onOrderClick(dish)}
                          >
                            Commander
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <button 
                className="scroll-btn scroll-right" 
                onClick={() => scrollRight(category)}
              >
                ›
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;