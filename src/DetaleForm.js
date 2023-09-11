import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { MyStyledButton } from './StyledComponents';

function DetaleForm() {
  const [detale, setDetale] = useState({
    pavadinimas: '',
    prekesKodas: '',
    kaina: '',
    gamintojas: '',
    kiekisSandelyje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetale({ ...detale, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/detales', detale)
      .then(() => alert('Detalė pridėta!'))
      .catch((error) => alert('Klaida pridedant detalę: ' + error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Pavadinimas:</FormLabel>
        <FormControl type="text" name="pavadinimas" value={detale.pavadinimas} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <FormLabel>Prekės kodas:</FormLabel>
        <FormControl type="text" name="prekesKodas" value={detale.prekesKodas} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <FormLabel>Kaina:</FormLabel>
        <FormControl type="number" name="kaina" value={detale.kaina} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <FormLabel>Gamintojas:</FormLabel>
        <FormControl type="text" name="gamintojas" value={detale.gamintojas} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <FormLabel>Kiekis sandėlyje:</FormLabel>
        <FormControl type="number" name="kiekisSandelyje" value={detale.kiekisSandelyje} onChange={handleChange} required />
      </FormGroup>

      <MyStyledButton type="submit">Pridėti</MyStyledButton>
    </Form>
  );
}

export default DetaleForm;
