import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Row, Col, DatePicker, Button ,message} from "antd";
import Select from 'react-select';
import '../../scss/System/SchduleManager.scss'
import dayjs from 'dayjs'
import * as actions from "../../store/actions"
import { Tag, Space } from 'antd'
import {createscheduleDoctorApi} from  "../../services/doctor_services"
const ManagerSpecialties = (props) => {
    
    return (
     <>
     <h1>aaa</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(ManagerSpecialties);
