import axios from 'axios';
export default (endpoint, method = 'GET', data) => {
    return axios({
        method: method,
        url: `${process.env.REACT_APP_URL}/${endpoint}`,
        data: data
    }).catch(err => console.log(err))
}

