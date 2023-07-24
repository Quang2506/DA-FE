import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
//import '../../../scss/Home/Patient/Doctor/DetailDoctor.scss'
import HeaderDetailDoctor from './headerDetailDoctor';
import { Row } from 'antd';
import { getDetailDoctor } from '../../../store/actions';
import ScheduleDoctor from './scheduleDoctor';
import ProfileDoctor from './profileDoctor';
//import { getScheduleDoctorApi } from '../../../services/doctor_services';
const DoctorDetail = (props) => {
  
  const {id} = useParams()
    useEffect(() => {
        props.getDetailDoctor(id)

    }, [])
   
console.log(props)
    

    return (
        <>
            <HeaderDetailDoctor />
            
            <div className='container'  style={{ marginTop: '70px' }}>
                <ProfileDoctor />
                <Row style={{marginTop:"50px",marginBottom:'50px'}}><ScheduleDoctor/></Row>
                </div>
                <Row className='detailDoctor' >
                <div className='container' >
               
                   
                        {props.dataDetailDoctor&&props.dataDetailDoctor.Markdown?(
                             <div dangerouslySetInnerHTML={{__html: props.dataDetailDoctor.Markdown.contentHTML}}></div>
                           

):''}

                
                </div>
                </Row>

            
        </>
    )
}

const mapStateToProps = state => {
console.log(state.admin.dataDetailDoctor)
    return {
     
        dataDetailDoctor: state.admin.dataDetailDoctor

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDetailDoctor: (id) => { dispatch(getDetailDoctor(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetail);