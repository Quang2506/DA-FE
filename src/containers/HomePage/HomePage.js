
import React from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HdHomePage from './Hd__home_page';
import Specialty from './section/Specialty';
import  MedicalFacility from './section/MedicalFacility'
import OutstandingDoctor from './section/OutstandingDoctor';
import HandBool from './section/HandBool';
import HomeFooter from './Home-Footer';
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
            <HomeFooter/>
              
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
