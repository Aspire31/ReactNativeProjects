import axios from 'axios';
var instance = axios.create();
//instance.defaults.baseURL = "https://newsapi.org/v2/everything";
//instance.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
instance.defaults.baseURL = "https://reqres.in/api/users"
export default instance;