import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-samanta.herokuapp.com'
})

export default api;