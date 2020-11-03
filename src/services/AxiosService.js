import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 4000
})
