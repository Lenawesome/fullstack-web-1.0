import axios from 'axios';
import config from '../config';

const httpClient = axios.create({
  baseURL: config.API_URL,
  timeout: 3000
});

const get = async (url) => {
  try {
    const response = await httpClient.get(url);
    return response && response.data;
  } catch (e) {
    //
  }
}

export {
  get
}