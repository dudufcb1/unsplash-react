import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
  },
});
