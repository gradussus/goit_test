import axios from 'axios';

axios.defaults.baseURL = 'https://643d5c746afd66da6af4dd4d.mockapi.io/users';

const fetchUsers = (page = 1) => {
  return axios.get(`/?&limit=8&page=${page}`);
};
const fetchAllUsers = () => {
  return axios.get();
};
const unfollow = (id, followers) => {
  return axios.put(`/${id}`, {
    followers: followers - 1,
  });
};
const follow = (id, followers) => {
  return axios.put(`/${id}`, {
    followers: followers + 1,
  });
};

export { fetchUsers, follow, unfollow, fetchAllUsers };
