//import '../../scss/HomeHeader.scss'
import React from 'react';
//import { Redirect } from 'react-router-dom';
//import { Input } from 'reactstrap';
//import {FormattedMessage} from "react-intl"
import { connect } from 'react-redux';
// import { languages } from '../../utils/constant';
//import { changeLanguageApp } from '../../store/actions/appActions';
import '../../../scss/Specialty.scss'

const Specialty = ()=> {

    
    

        return (
            <div className='specialty' >
               
             
            </div>
        );
 

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux :(language) =>dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
