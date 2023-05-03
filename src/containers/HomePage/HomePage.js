
import React, { useEffect } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HdHomePage from './Hd__home_page';
import Specialty from './section/Specialty';
import MedicalFacility from './section/MedicalFacility'
import OutstandingDoctor from './section/OutstandingDoctor';
import HandBool from './section/HandBool';
//import HomeFooter from './F_home_page ';
import HoneF from './F_home_page'
import CommentWeb from './section/CommentWeb';
//import Test from './test';
import { fetchTopDoctor } from '../../store/actions/adminAction'

const HomePage = (props) => {

    useEffect(() => {
        props.OutstandingDoctor()

    }, [])

   
    return (
        <div className='Home-page'>


            <HdHomePage />
            <Specialty />
            <MedicalFacility />
            <OutstandingDoctor
                doctorTop={props.dataOutstandingDoctor}
            />
            <HandBool />
            <CommentWeb />
            <HoneF />


        </div>
    );


}

const mapStateToProps = state => {
    return {
        // isLoggedIn: state.user.isLoggedIn,
        dataOutstandingDoctor: state.admin.doctorTop


    };
};

const mapDispatchToProps = dispatch => {
    return {
        OutstandingDoctor: () => dispatch(fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
