import axios from './AxiosApi';


 class APIServiceMethods {
    getRequest(endPoint,params){
        console.log("Request "+axios.defaults.baseURL+endPoint);
        return axios.get(axios.defaults.baseURL+endPoint,params)
    }

    postRequest(endPoint,params){
        console.log(axios.defaults.baseURL + params)
        return axios.post(endPoint,params);
    }

    putRequest(params){
        return axios.put(params);
    }
}

export default APIServiceMethods;