
import React from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HdHomePage from './Hd__home_page';
import Specialty from './section/Specialty';
import  MedicalFacility from './section/MedicalFacility'
import OutstandingDoctor from './section/OutstandingDoctor';
import HandBool from './section/HandBool';
//import HomeFooter from './F_home_page ';
import HoneF from './F_home_page'
import CommentWeb from './section/CommentWeb';
//import Test from './test';

const HomePage = (props)=> {

    
    

        return (
           <div className='Home-page'>
               
             
            <HdHomePage/>
           <Specialty/>
           <MedicalFacility/>
            <OutstandingDoctor/>
            <HandBool/>
            <CommentWeb/>
            <HoneF/>
           
              
           </div>
        );
 

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
