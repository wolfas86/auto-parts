import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, credentials);
    console.log("Serverio atsakymas:", response.data);
    localStorage.setItem('token', response.data.accessToken);
    const isAdmin = response.data.roles.includes('ROLE_ADMIN');
    return { ...response.data, isAdmin };
  } catch (error) {
    console.error("Klaida prisijungiant:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    await axios.post(`${BASE_URL}/api/auth/register`, userData);
  } catch (error) {
    console.error("Klaida registruojantis:", error.response ? error.response.data : error.message);
    throw error;
  }
};
