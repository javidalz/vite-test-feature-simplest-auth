import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    // headers: { 'X-Custom-Header': 'foobar' },
})

axiosInstance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response
    },
    function (error) {
        // if (error.response.status === 400) {
        //     alert('logout')
        // }
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('token')
        if (token) config.headers.Authorization = token

        // Authorization: 123l1n23l1jn
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

export default axiosInstance
