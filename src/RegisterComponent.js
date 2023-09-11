import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './authService';
import { useTranslation } from 'react-i18next';
import './loginComponent.css';  // Importuoti tą pačią CSS failą kaip LoginComponent

const RegisterComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userData, setUserData] = useState({ username: '', password: '', email: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
      navigate('/login');
    } catch (error) {
      setErrorMessage(t("Klaida registruojant vartotoją!"));
    }
  };

  return (
    <div className="login-container">  {/* Naudojame tą pačią klasę kaip LoginComponent */}
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label>{t('Vartotojo vardas')}</label>
                <input type="text" name="username" value={userData.username} onChange={handleChange} />
            </div>
            <div className="input-group">
                <label>{t('El. paštas')}</label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
            </div>
            <div className="input-group">
                <label>{t('Slaptažodis')}</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
            </div>
            <button type="submit">{t("Registruotis")}</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    </div>
  );
};

export default RegisterComponent;
