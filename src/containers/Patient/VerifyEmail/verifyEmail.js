import React,{useEffect,useState} from "react";
import { connect } from 'react-redux';
import {ConfirmAppointmentBooking} from '../../../services/patient'
import HdHomePage from "./header"
const VerifyEmail = (props) =>{
 const [status,setStatus] = useState(false)
    useEffect(async()=>{
        const urlParams = new URLSearchParams(props.location.search)
        const token = urlParams.get('token')
        const doctorId = urlParams.get('doctorId')
        const objectData = {}
        objectData.token=token
        objectData.doctorId=doctorId
      
        let  resdata = await ConfirmAppointmentBooking(objectData)
        console.log(resdata.dataRes.errCode)
        if(resdata.dataRes.errCode===0){
            setStatus(true)
        }else{
            setStatus(false)
        }

    },[])
    //console.log(queryString)
return(
    <>
    <HdHomePage/>
    {status?(<h3>Bạn đặt lịch khám thành công</h3>):(<h3>Bạn đã đặt lịch thành công hoặc lịch khám không tồn tại</h3>)}
    </>
   
)
}
const mapStateToProps = state => {
    
        return {
         
        };
    };
    
    const mapDispatchToProps = dispatch => {
        return {
           
        };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);