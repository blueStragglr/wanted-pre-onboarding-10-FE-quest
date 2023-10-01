import axios from 'axios'

export const authApi = axios.create({
  baseURL: 'https://64f732e69d775408495348ae.mockapi.io/api/v1',
})
