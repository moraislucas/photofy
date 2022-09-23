import axios from 'axios';

const url = 'https://api.unsplash.com/photos';
const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  // post(endpoint, body) {
  //   return axiosInstance.post(endpoint, body);
  // },
  // put(endpoint, body) {
  //   return axiosInstance.put(endpoint, body);
  // },
  // delete(endpoint) {
  //   return axiosInstance.delete(endpoint);
  // },
};