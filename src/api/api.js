// src/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (userData) => {
  const response = await api.post('/auth/login', userData);
  return response.data;
};

// Implement other API functions for sequences CRUD operationsnode index.js