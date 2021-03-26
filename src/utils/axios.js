import axios from 'axios';



const accessToken = localStorage.getItem("access-token")
axios.defaults.baseURL = "http://localhost:3000/v1"
axios.defaults.headers.authorization = `Bearer ${accessToken ? accessToken : ""}`

export default axios;