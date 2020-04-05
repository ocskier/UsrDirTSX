import axios from 'axios';

export const getUserData = () => {
  return axios.get('https://randomuser.me/api/?results=200&nat=us');
};
