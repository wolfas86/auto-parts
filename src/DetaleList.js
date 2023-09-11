import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './detaleList.css';
import { useTranslation } from 'react-i18next';
import { useAuth } from './AuthContext';

const DetaleList = () => {
  const [detales, setDetales] = useState([]);
  const [editingDetaleId, setEditingDetaleId] = useState(null);
  const [editingDetaleData, setEditingDetaleData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const { kategorija } = useParams();
  const { t } = useTranslation();
  const { isAdmin } = useAuth();

  useEffect(() => {
    axios.get('http://localhost:8080/api/detales')
      .then(response => {
        setDetales(response.data);
      })
      .catch(error => {
        console.error('Klaida gaunant detales:', error);
      });
  }, []);

  const filteredDetales = detales
    .filter(detale => !kategorija || detale.detaleKategorija.pavadinimas.toLowerCase().replace(/ /g, '-') === kategorija)
    .filter(detale => {
        return detale.pavadinimas.toLowerCase().includes(searchTerm.toLowerCase()) || 
               detale.prekesKodas.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const kategorijaTitle = kategorija ? kategorija.replace(/-/g, ' ').charAt(0).toUpperCase() + kategorija.slice(1) : t('Visos Detalės');

  const editDetale = (detaleId) => {
    const selectedDetale = detales.find(det => det.id === detaleId);
    setEditingDetaleData(selectedDetale);
    setEditingDetaleId(detaleId);
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/detales/${editingDetaleId}`, editingDetaleData)
      .then(response => {
        setDetales(prevDetales => prevDetales.map(detale => detale.id === editingDetaleId ? response.data : detale));
        setEditingDetaleId(null);
      })
      .catch(error => {
        console.error('Klaida atnaujinant detale:', error);
      });
  };

  const deleteDetale = (detaleId) => {
    axios.delete(`http://localhost:8080/api/detales/${detaleId}`)
      .then(() => {
        setDetales(prevDetales => prevDetales.filter(detale => detale.id !== detaleId));
      })
      .catch(error => {
        console.error('Klaida trinant detale:', error);
      });
  };

  if (editingDetaleId) {
    return (
      <div className="editing-form">
        <h2>Redaguoti detalę</h2>
        <form onSubmit={handleSave}>
          <input 
              type="text" 
              value={editingDetaleData.pavadinimas} 
              onChange={e => setEditingDetaleData({...editingDetaleData, pavadinimas: e.target.value})} 
          />
          <button type="submit">Išsaugoti</button>
          <button type="button" onClick={() => setEditingDetaleId(null)}>Atšaukti</button>
        </form>
      </div>
    );
  }

  return (
    <div className="detale-container">
      <div className="kategorija-container">
        <h2 className="kategorija-title">{kategorijaTitle}</h2>
        <input 
            type="text" 
            placeholder="Ieškoti pagal pavadinimą.." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={`detale-list ${filteredDetales.length > 0 ? 'has-details' : ''}`}>
        {filteredDetales.length === 0 ? (
          <p className="no-details-message">Deja, šiuo metu detales neturime.</p>
        ) : (
          filteredDetales.map(detale => (
            <div className="detale-item" key={detale.id}>
              <img src={`/images/${detale.prekesKodas}.jpg`} alt={detale.pavadinimas} className="detale-img" />
              <div className="detale-info">
                <p>{t('Detalės pavadinimas')}: {detale.pavadinimas}</p>
                <p>{t('Prekės kodas')}: {detale.prekesKodas}</p>
                <p>{t('Kaina')}: {detale.kaina} €</p>
                <p>{t('Gamintojas')}: {detale.gamintojas}</p>
              </div>
              {isAdmin && (
                <div className="admin-actions">
                  <button onClick={() => editDetale(detale.id)}>Redaguoti</button>
                  <button onClick={() => deleteDetale(detale.id)}>Ištrinti</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DetaleList;
