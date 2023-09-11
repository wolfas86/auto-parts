import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import { MyStyledButton } from './StyledComponents';

function AutomobilisForm() {
  const [automobilis, setAutomobilis] = useState({
    marke: '',
    modelis: '',
    gamybosMetai: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAutomobilis({ ...automobilis, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/automobiliai', automobilis)
      .then(() => alert('Automobilis pridėtas!'))
      .catch((error) => alert('Klaida pridedant automobilį: ' + error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Markė</FormLabel>
        <FormControl type="text" name="marke" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Modelis</FormLabel>
        <FormControl type="text" name="modelis" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Gamybos Metai</FormLabel>
        <FormControl type="number" name="gamybosMetai" onChange={handleChange} />
      </FormGroup>
      <MyStyledButton type="submit">Pridėti</MyStyledButton>
    </Form>
  );
}

export default AutomobilisForm;
