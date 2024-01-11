import axios from "axios"

const request = axios.create({
  baseURL: 'https://api.unsplash.com/',
  timeout: 5000,

})

 
export { request }