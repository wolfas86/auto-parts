import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>{t('Auto Dalys')}</h3>
        <ul>
          <li>{t('Kontaktai')}</li>
          <li>{t('Darbo pasiūlymai')}</li>
          <li>{t('Patarimai')}</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>{t('Informacija')}</h3>
        <ul>
          <li>{t('Sąlygos')}</li>
          <li>{t('Nuolaidos')}</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>{t('Kontaktai')}</h3>
        <ul>
          <li>autodalys@autodalys.lt</li>
          <li>8-88 888888</li>
          <li>{t('Gyvas pokalbis')}</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>{t('Soc. tinklai')}</h3>
      </div>
    </footer>
  );
};

export default Footer;
