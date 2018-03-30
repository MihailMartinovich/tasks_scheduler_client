import axios from 'axios';
import Store from '@/store/index';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
  config = Object.assign(config, {
    headers: {
      'Authorization': (Store && Store.state && Store.state.auth && Store.state.auth.token) || ''
    }
  });

  return config;
});

export default axiosInstance;
