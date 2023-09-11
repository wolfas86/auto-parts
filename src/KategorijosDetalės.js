import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function KategorijosDetalės() {
  const [kategorijosDetalės, setKategorijosDetalės] = useState([]);
  const { kategorija } = useParams();

  useEffect(() => {
    axios.get(`/api/detales/search/kategorija/${kategorija}`)
      .then(response => {
        setKategorijosDetalės(response.data);
      })
      .catch(error => {
        console.error('Klaida gaunant kategorijos detales:', error);
      });
  }, [kategorija]);

  return (
    <div>
      <h2>Kategorijos detalės: {kategorija}</h2>
      {kategorijosDetalės.map(detale => (
        <div key={detale.id}>
          <p>Pavadinimas: {detale.pavadinimas}</p>
          <p>Aprašymas: {detale.aprasymas}</p>
          <p>Kaina: {detale.kaina}</p>
        </div>
      ))}
    </div>
  );
}

export default KategorijosDetalės;
