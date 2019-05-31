import {apiKey} from './api_key';

const baseURL =
  `https://authenticjobs.com/api/?${apiKey}&format=json`;

const proxyUrl =
  'https://cors-anywhere.herokuapp.com/';

export const URL = proxyUrl + baseURL;

// Most Recent Frontend

// By Language

// By Location

// By Category =
// [Design & User Experience, Front-end Engineering, Back-end Engineering, Product Management, Marketing & Sales, Management, Customer &amp; Community]

// By Types =
// [Full-time, Part-time]

// By Company Type =
// [Startup, Studio, Small business, Mid-sized business, Large organization, Educational institution, Non-profit]

// By keyword =
// NOTE: Keywords to look for in the title or description of the job posting.Separate multiple keywords with commas.Multiple keywords will be treated as an OR

// By ID
