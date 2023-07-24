
import React from 'react';
import {FormattedMessage} from "react-intl"
import { connect } from 'react-redux';
import'../../../scss/Home/headerHome.scss'

const HeaderHomePage = ()=> {

    

        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='home-header-icom'><i className="fa fa-align-justify icon-fa-align-justify" aria-hidden="true"></i>
                    </div>
                    <div className='home-header-logo'>
                        <div className='logo'></div>
                        </div>
                    <div className='home-header-content-content'>
                        <div className='home-header-content-item'>
                            <FormattedMessage id="homeheader.speciality"/>
                            </div>
                        <div className='home-header-content-item'>
                            <FormattedMessage id="homeheader.health-facilities"/>
                            </div>
                        <div className='home-header-content-item'>
                            <FormattedMessage id="homeheader.Doctor"/>
                            </div>
                        <div className='home-header-content-item'>
                            <FormattedMessage id="homeheader.Examination-package"/>
                            </div>
                    </div>
                    <div className='home-header-sp'>
                    <i className="fa fa-question-circle fa-question-circle-clor" aria-hidden="true"></i>
                    <span className='home-header-content-item'><FormattedMessage id="homeheader.Support"/></span>
                    </div>
                    {/* <div className='home-header-language'>
                        <span 
                        className='language-vn'
                         onClick={()=>changeLanguage(languages.VI)}
                        >
                            VI
                        </span>  
                        <span 
                        className='language-eg'
                        onClick={()=>changeLanguage(languages.EN)}
                        >
                            EG
                        </span>
                    </div> */}
                </div>
              

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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHomePage);
