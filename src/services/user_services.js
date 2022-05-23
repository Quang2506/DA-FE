import axios from "../axios"

const HandleLoginApi = (userEmail,userPasswork) =>{

return  axios.post('/api/login',{email:userEmail,passwork:userPasswork})
}
export default HandleLoginApi