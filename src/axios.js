import axios from 'axios';

function Axios(request, url, payload = '') {
    const axiosInstance = axios.create({
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return axiosInstance.request({
        method: request,
        url: url,
        data: JSON.stringify(payload)
    });
}

export default Axios