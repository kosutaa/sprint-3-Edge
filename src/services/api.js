import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com/api/v1',
  timeout: 10000, // Tempo de espera de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;