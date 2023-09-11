import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAuth } from './AuthContext'; 
import './navigationBar.css';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand as={Link} to="/" className="brand-center">
        <img
          src="./logo.jpg"
          alt="Logo"
          className="logo-image"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-left">
          <Nav.Link href="/" className="nav-link-custom">{t('Pagrindinis')}</Nav.Link>
          <Nav.Link as={Link} to="/detales" className="nav-link-custom">{t('Detalės')}</Nav.Link>
          <Nav.Link href="/specialus-pasiulymai" className="nav-link-custom">{t('Specialūs pasiūlymai!')}</Nav.Link>
        </Nav>
        <Nav className="ml-auto nav-right">
          {isAuthenticated ? (
            <>
              <span className="navbar-text mr-3 greeting-text">{user && `${t('Sveiki')}, ${user.username}!`}</span>
              <Nav.Link onClick={handleLogout} className="nav-link-custom">{t('Atsijungti')}</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login" className="nav-link-custom">{t('Prisijungti')}</Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-link-custom">{t('Užsiregistruoti')}</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      <div className="language-switcher">
        <span onClick={() => i18n.changeLanguage('en')}>EN</span>
        <span onClick={() => i18n.changeLanguage('lt')}>LT</span>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
