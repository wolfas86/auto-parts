import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AutomobilisList from './AutomobilisList';
import DetaleList from './DetaleList';
import AutomobilisForm from './AutomobilisForm';
import DetaleForm from './DetaleForm';
import ProduktuKatalogas from './ProduktuKatalogas';
import KategorijosDetalės from './KategorijosDetalės';
import NavigationBar from './NavigationBar';
import Pagrindinis from './Pagrindinis';
import DetaliuSarasas from './DetaliuSarasas';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import './styles.css';
import './i18n';
import { AuthProvider } from './AuthContext'; // Įsitikinkite, kad šis kelias yra teisingas

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavigationBar />
          <div className="content-container">
            <Routes>
                <Route path="/" element={<Pagrindinis />} />
                <Route path="/automobiliai" element={<AutomobilisList />} />
                <Route path="/detales" element={<DetaleList />} />
                <Route path="/detales" element={<DetaliuSarasas />} />
                <Route path="/" element={<ProduktuKatalogas />} />
                <Route path="/kategorijos/:kategorija" element={<KategorijosDetalės />} />
                <Route path="/detales/:kategorija" element={<DetaleList />} />
                <Route path="/naujas-automobilis" element={<AutomobilisForm />} />
                <Route path="/nauja-detale" element={<DetaleForm />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
