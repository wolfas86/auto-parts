import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000' // Arba bet koks kitas serverio adresas
});

export default apiClient;
