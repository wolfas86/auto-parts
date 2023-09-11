import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login } from './authService';
import { useAuth } from './AuthContext';
import './loginComponent.css';  

const LoginComponent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated, setUser, setIsAdmin  } = useAuth();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const returnedUser = await login(credentials);
            console.log("Grąžintas vartotojas:", returnedUser);
            setIsAuthenticated(true);
            setUser(returnedUser);
            setIsAdmin(returnedUser.isAdmin);  // Nustatome, ar vartotojas yra administratorius
            navigate('/');
        } catch (error) {
            setErrorMessage(t("Klaida prisijungiant!"));
        }
    };

    if (isAuthenticated) {
        navigate('/');
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>{t('Vartotojo vardas')}</label>
                        <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>{t('Slaptažodis')}</label>
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">{t('Prisijungti')}</button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
