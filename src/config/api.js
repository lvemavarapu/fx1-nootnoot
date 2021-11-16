import axios from 'axios'

const nootnootAPI = axios.create({
    // baseURL: 'http://localhost:3000'
   baseURL:'https://nootnoot-api.herokuapp.com'

})

nootnootAPI.interceptors.request.use(req=>{

    const token = sessionStorage.getItem("token")
    console.log("interceptors token", token)
    if(token){
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default nootnootAPI