import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000, // Timeout if necessary
  headers: {
    ContentType: 'application/json',
  },
})

export default Axios
