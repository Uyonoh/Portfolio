import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/";

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}login/`, credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}signup/`, userData);
  return response.data;
};
