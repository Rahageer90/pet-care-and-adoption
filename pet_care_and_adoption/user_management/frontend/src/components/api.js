// api.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api', // Replace with your Laravel backend URL
    timeout: 5000, // Timeout after 5 seconds
});

export default instance;
