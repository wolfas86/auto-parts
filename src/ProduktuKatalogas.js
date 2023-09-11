
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './produktuKatalogas.css';
import { useTranslation } from 'react-i18next';

const produktai = [
  { pavadinimas: "Akumuliatoriai", img: "/akumas.jpg" },
  { pavadinimas: "Apšvietimas", img: "/apsvietimas.jpg" },
  { pavadinimas: "Vidaus aksesuarai", img: "/vidaus.jpg" },
  { pavadinimas: "Išorės aksesuarai", img: "/isores.jpg" },
  { pavadinimas: "Chemija", img: "/chemija.jpg" },
  { pavadinimas: "Alyvos ir tepalai", img: "/tepalai.jpg" },
  { pavadinimas: "Įrankiai", img: "/irankiai.jpg" },
  { pavadinimas: "Ratai", img: "/patangos.jpg" },
  { pavadinimas: "Variklio skyrius", img: "/remontui.jpg" },
  { pavadinimas: "Motociklams", img: "/mocams.jpg" },
];

function ProduktuKatalogas() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { t } = useTranslation();  // Vertimas

    return (
        <div>
            <div className="katalogas-header">{t('Produktų Katalogas')}</div>
            <ul className="produktu-lista">
                {produktai.map((produktas, index) => (
                    <li key={produktas.pavadinimas} className="produktas">
                        <Link
                            to={`/detales/${produktas.pavadinimas.toLowerCase().replace(/ /g, '-')}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="produktas-img-wrapper">
                                <img src={produktas.img} alt={produktas.pavadinimas} className="produktas-img" />
                            </div>
                            <span className={hoveredIndex === index ? 'highlighted' : ''}>
                                {t(produktas.pavadinimas)}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProduktuKatalogas;