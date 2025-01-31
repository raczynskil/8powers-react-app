import axios from 'axios';

export const formatTokenToBearer = (token: string): string => {
  return token && `Bearer ${token}`;
};

export const mainApi = axios.create({
  baseURL: import.meta.env.VITE_MAIN_API_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_BASE_URL,
});
