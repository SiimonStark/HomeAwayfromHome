import {apiKey} from './api_key';

const baseURL =
  `https://authenticjobs.com/api/?${apiKey}&format=json`;

const proxyUrl =
  'https://cors-anywhere.herokuapp.com/';

export const URL = proxyUrl + baseURL;