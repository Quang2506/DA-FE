
import React from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HdHomePage from './Hd__home_page';
import Specialty from './section/Specialty';
//import Test from './test';
const HomePage = (props)=> {

    
      

        return (
           <div className='Home-page'>
               
             
            <HdHomePage/>
           <Specialty/>

              
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
