import axios from 'axios';

import SERVER from './server';

const axiosInstance = axios.create({
  baseURL: SERVER,
});

const AUTH_TOKEN = window.localStorage.getItem('token');

if(AUTH_TOKEN !== "" || AUTH_TOKEN !== null){
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
}

axiosInstance.defaults.timeout = 7000;
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
