import axios from "../axios"

export const HandleLoginApi = (userEmail,userPasswork) =>{

return  axios.post('/api/login',{email:userEmail,passwork:userPasswork})
}

export const getAllUser = (idUser) =>{
    return axios.get(`/api/user-login?id=${idUser}`)
}
export const createUser = (data)=>{
    console.log('',data)
    return axios.post(`/api/create-user`,data)
}
export const deleteUser = (idUser) =>{
    return  axios.delete("/api/delete-user",{
        data:{
            id:idUser
        }
      })
}
export const editUser = (data) =>{
    return axios.put("/api/edit-user",data)
}