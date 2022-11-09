import axios from 'axios';

export const fetchInstance = () => {
  if (process.env.REACT_APP_API_URL === undefined)
    throw new Error('API_URL is not defined');

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const fetchWithJWT = ({ jwt }: { jwt: string }) => {
  if (process.env.REACT_APP_API_URL === undefined)
    throw new Error('API_URL is not defined');

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
};
