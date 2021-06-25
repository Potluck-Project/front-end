import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://potluck-app-api.herokuapp.com/'
    })
}

export default axiosWithAuth;