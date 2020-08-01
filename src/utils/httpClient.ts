import Axios, { AxiosRequestConfig } from 'axios';

Axios.defaults.withCredentials = true;

const instanceConfig: AxiosRequestConfig = {
  timeout: 5000,
  baseURL: '/api',
};

const httpClient = Axios.create(instanceConfig);

export default httpClient;
