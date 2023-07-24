import axios from "../axios"

export const createPatienBooking = (data)=>{
    return axios.post(`/api/user-booking`,data)
}
export const ConfirmAppointmentBooking = (data)=>{

    return axios.post('/api/verify-book-appointment',data)
}