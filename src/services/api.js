import axios from 'axios';

const api = axios.create({
  baseURL: 'http://urlapi.com.br',
});

export default api;
