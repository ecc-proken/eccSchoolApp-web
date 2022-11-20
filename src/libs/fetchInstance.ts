import axios from 'axios';
import User from 'types/user';

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

export const fetchWithToken = ({ token, uuid }: User) => {
  if (process.env.REACT_APP_API_URL === undefined)
    throw new Error('API_URL is not defined');

  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/${uuid}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
