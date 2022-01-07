import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
});

function testAPI(userData) {
  return instance.post('test', userData);
}


export { testAPI }