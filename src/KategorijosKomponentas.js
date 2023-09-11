import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KategorijosKomponentas() {
    const [detales, setDetales] = useState([]);
    const [selectedKategorija, setSelectedKategorija] = useState('');

    useEffect(() => {
        if (selectedKategorija) {
            axios.get(`/api/detales/search/kategorija/${selectedKategorija}`)
                .then(response => {
                    setDetales(response.data);
                })
                .catch(error => {
                    console.error("Klaida gaunant detales:", error);
                });
        }
    }, [selectedKategorija]);

    return (
        <div>
            <select value={selectedKategorija} onChange={e => setSelectedKategorija(e.target.value)}>
                <option value="Akumuliatoriai">Akumuliatoriai</option>
                <option value="Apšvietimas">Apšvietimas</option>
                {/* Čia galite pridėti daugiau kategorijų */}
            </select>
            <ul>
                {detales.map(detale => (
                    <li key={detale.id}>{detale.pavadinimas}</li>
                ))}
            </ul>
        </div>
    );
}

export default KategorijosKomponentas;
