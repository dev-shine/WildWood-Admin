import axios from 'axios';
import store from '../../store';
// import {
//   signOut,
// } from '../../actions/authentication';

const client = axios.create({
  baseURL: 'http://localhost:3000/api',
  // baseURL: 'http://18.220.22.214:3000/api',
});

client.interceptors.response.use(response => response, error => {
  // if (error && error.response && error.response.status === 401) {
  //   store.dispatch(signOut());
  //   return Promise.reject(

  //   );
  // }
  // return false;
});

export const fetchDataService = (url, headers) => client.get(
  url, {
    headers: {
      ...headers,
    },
  },
)
  .then(response => response)
  .catch(err => err);

export const postDataService = (url, item, headers) => client.post(url, item, {
  headers: {
    ...headers,
  },
})
  .then(response => response)
  .catch(err => err);

export const updateDataService = (url, item, headers) => client.patch(url, item, {
  headers: {
    ...headers,
  },
})
  .then(response => response)
  .catch(err => err);

  export const deleteDataService = (url, headers) => client.delete(
    url, {
      headers: {
        ...headers,
      },
    },
  )
    .then(response => response)
    .catch(err => err);
