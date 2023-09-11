import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './randomDetale.css';

const RandomDetale = () => {
  const [randomDetale, setRandomDetale] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/detales')
      .then(response => {
        const detales = response.data;
        const randomIndex = Math.floor(Math.random() * detales.length);
        setRandomDetale(detales[randomIndex]);
      })
      .catch(error => {
        console.error('Klaida gaunant detales:', error);
      });
  }, []);

  return (
    <div>
      {randomDetale ? (
        <div className="scrolling-animation">
        <img src={`/images/${randomDetale.prekesKodas}.jpg`} alt={randomDetale.pavadinimas} />
        <p>{randomDetale.pavadinimas}</p>
      </div>
      ) : (
        <p>Kraunama atsitiktinė detalė...</p>
      )}
    </div>
  );
};

export default RandomDetale;
