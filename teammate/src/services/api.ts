import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-footv5.herokuapp.com',
    timeout: 10000
})

export default api
