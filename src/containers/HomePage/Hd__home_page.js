import '../../scss/HomeHeader.scss'
import React from 'react';
//import { Redirect } from 'react-router-dom';
//import { Input } from 'reactstrap';
import {FormattedMessage} from "react-intl"
import { connect } from 'react-redux';
// import { languages } from '../../utils/constant';
//import { changeLanguageApp } from '../../store/actions/appActions';

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
                <div className='home-header-background'>
                    <div className='header-background-conten' style={{paddingTop:'30px'}}>
                        <p className='header-background-conten-title1'><FormattedMessage id="homeheader.Medical-Platform"/> </p>
                        <p className='header-background-conten-title2'><FormattedMessage id="homeheader.Comprehensive-Health-Care" /> </p>
                        <div className='header-background-conten-search' >
                            <div className='search-icon'>
                            <i className="fa fa-search custom-search" aria-hidden="true"></i>
                            </div> 
                            <input type='text'
                             className='custom-Input'
                              placeholder="Tìm Kiếm"
                              />
                            </div>
                    </div>
                    <div className='header-background-Item'>
                       
                        <a href='#' className='header-background-link' >
                            <div className='background-link-item1'>                  
                            </div>
                            <p className='background-link-item-text' ><FormattedMessage id="homeheader.examination"/><br/><FormattedMessage id="homeheader.specialist"/></p>
                        </a>
                      
                        <a href='#' className='header-background-link'>
                            <div className='background-link-item2'>
                            
                            </div>
                            <p className='background-link-item-text' ><FormattedMessage id="homeheader.examination"/><br/>từ xa</p>
                        </a>
                        <a href='#' className='header-background-link'>
                            <div className='background-link-item3'>
                            </div>
                            <p className='background-link-item-text' >Khám<br/>Tổng Quát</p>
                        </a>
                        <a href='#' className='header-background-link'>
                            <div className='background-link-item4'>
                            </div>
                            <p className='background-link-item-text' >Xét Nghiệm<br/>y học</p>
                        </a>
                        <a href='#' className='header-background-link'>
                            <div className='background-link-item5'>
                          
                            </div>
                            <p className='background-link-item-text' >Sức Khỏe<br/>Tinh Thần</p>
                        </a>
                        <a href='#' className='header-background-link'>
                            <div className='background-link-item6'>

                            </div>
                            <p className='background-link-item-text' >Khám<br/>Nha Khoa</p>
                          
                        </a>
                        <a href='#' className='header-background-link'>
                            <div className='background-link-item7'>
                           
                            </div>
                            <p className='background-link-item-text' >Gói<br/>Phẫu Thuật</p>
                        </a>
                        <a href='#' className='header-background-link'>
                            <div className='background-link-item8'>
                           
                            </div>
                            <p className='background-link-item-text' >Sản Phẩm<br/>y tế</p>
                        </a>
                    </div>
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
