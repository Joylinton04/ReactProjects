import axios from 'axios';


const apiRequest = axios.create({
    baseURL: "http://localhost:3500"
});

export default apiRequest;