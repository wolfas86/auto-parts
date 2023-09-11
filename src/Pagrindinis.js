// Pagrindinis.js


import React from 'react';
import RandomDetale from './RandomDetale';
import Footer from './Footer'; // importuokite naująjį Footer
import ProduktuKatalogas from './ProduktuKatalogas';

function Pagrindinis() {
  return (
    <div>
      <RandomDetale />
      <ProduktuKatalogas />
      <Footer />
    </div>
  );
}

export default Pagrindinis;