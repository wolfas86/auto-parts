import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('lt')}>LT</button>
    </div>
  );
};

export default LanguageSelector;
