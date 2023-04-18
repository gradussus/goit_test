import axios from 'axios';

axios.defaults.baseURL = 'https://643d5c746afd66da6af4dd4d.mockapi.io/users';

const fetchUsers = (page = 1) => {
  return axios.get(`/?&limit=8&page=${page}`);
};

export { fetchUsers };
