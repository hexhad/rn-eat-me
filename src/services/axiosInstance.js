import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'},
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  config => {
    console.log(
      'axios',
      'request',
      'before',
      'Do something before request is sent',
    );
    return config;
  },
  error => {
    console.log('axios', 'request', 'after', 'Do something with request error');
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  response => {
    console.log(
      'axios',
      'response',
      'after',
      'Do something with response data',
      ' range of 2xx',
    );
    return response;
  },
  error => {
    console.log(
      'axios',
      'response',
      'after',
      'Do something with response error',
      ' range of 2xx',
    );
    return Promise.reject(error);
  },
);

export default axiosInstance;
