import axios from 'axios';

const baseurl = "http://localhost:3000";

export const loginRequest = () => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    return axios.get(baseurl + '/contactform', config);
}

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const postContactForm = (contact) => {
        return apiClient.post('/contactform', contact)
}