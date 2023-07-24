import axios from "../axios"



export const getTopDoctor = (limit) =>{
    return axios.get(`/api/get-doctor-home?limit=${limit}`)

}
export const getAllDoctor = ()=>{
    return axios.get(`/api/get-all-doctor`)
}
export const postInfDoctor = (data) =>{
  
    return axios.post("/api/save-inf-doctor",data)
}
export const  getDoctorDetailById = (id) =>{
 return axios.get(`/api/get-doctor-detail-by-id?id=${id}`)
}
export const updateDetailMarkdownApi = (data)=>{
    return axios.put(`/api/edit-markdown`,data)
}
export const createscheduleDoctorApi = (data)=>{
    console.log(data)
    return axios.post("/api/creat-schedule",data)
}
export const getScheduleDoctorApi = (idDoctor,date)=>{
    return axios.get(`/api/get-schedule-doctor?idDoctor=${idDoctor}&&date=${date}`)
}
export const createInforDoctorApi = (data)=>{
    return axios.post("/api/create-doctor-infor",data)
}