import axios from 'axios' 

const apiRequest = axios.create({
    baseURL: '  http://localhost:3002'
})

export default apiRequest;