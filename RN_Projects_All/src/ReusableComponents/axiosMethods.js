import axios from 'axios'
class axiosMethods {
    static getRequest(endPoint, callBack) {
        axios.get(endPoint)
            .then(response => {
                callBack(response.data)
            })
    }

    static postRequest(endPoint, params) {
        console.log(axios.defaults.baseURL + params)
        return axios.post(endPoint, params);
    }

    putRequest(params) {
        return axios.put(params);
    }
}

export default axiosMethods;
