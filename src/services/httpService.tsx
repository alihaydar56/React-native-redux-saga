import axios from 'axios';
import {store} from '../redux/store';

const HttpService = {
  //GET API

  async get(url: string, data = {}, headers = {}) {
    const config = getConfig(url, headers);

    let response = await axios
      .get(config.url, {
        timeout: 7000,
        headers: config.headers,
      })
      .catch((err: any) => {
        console.log('[GET REQ ERROR] :', err.message);
      });

    return response;
  },
  async post(url: string, data = {}, headers = {}) {
    const config = getConfig(url, headers);

    let response = await axios
      .post(config.url, data, {
        timeout: 7000,
        headers: config.headers,
      })
      .catch((err: any) => {
        console.log('POST REQ ERROR :', err.message);
      });

    return response;
  },
};

const getConfig = (url: string, headers: any) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  const token = store.getState()?.user?.accessToken;

  headers['Content-Type'] = 'application/json';
  headers['Accept'] = 'application/json';

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return {
    url: encodeURI(baseUrl + url),
    headers,
  };
};


export default HttpService;
