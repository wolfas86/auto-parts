import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AutomobilisList = () => {
  const [automobiliai, setAutomobiliai] = useState([]);

  // Šis kodas atlieka GET užklausą į Spring Boot API ir nustato automobilių sąrašą
  useEffect(() => {
    axios.get('http://localhost:8080/api/automobiliai')
      .then(response => {
        setAutomobiliai(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Automobiliai</h1>
      <ul>
        {automobiliai.map(auto => (
          <li key={auto.id}>{auto.marke} {auto.modelis} ({auto.gamybosMetai})</li>
        ))}
      </ul>
    </div>
  );
};

export default AutomobilisList;
