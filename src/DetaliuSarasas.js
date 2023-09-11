import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetaliuSarasas() {
  const [detalės, setDetalės] = useState([]);
  const { kategorija } = useParams();

  useEffect(() => {
    fetch(`/api/detales/search/kategorija/${kategorija}`)
      .then(response => response.json())
      .then(data => setDetalės(data));
  }, [kategorija]);

  return (
    <div>
      <h2>Detalės kategorijoje: {kategorija}</h2>
      {detalės.length === 0 ? (
        <p>Nėra detalių šioje kategorijoje</p>
      ) : (
        <ul>
          {detalės.map(detale => (
            <li key={detale.id}>{detale.pavadinimas}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DetaliuSarasas;
