//import '../../scss/HomeHeader.scss'
import React from 'react';
//import { Redirect } from 'react-router-dom';
//import { Input } from 'reactstrap';
//import {FormattedMessage} from "react-intl"
import { connect } from 'react-redux';
//import Img1 from '../../../assets/specialty_Img/120331-co-xuong-khop.jpg'
// import { languages } from '../../utils/constant';
//import { changeLanguageApp } from '../../store/actions/appActions';
import '../../../scss/outstandingDoctor.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OutstandingDoctor = ()=> {

    const settings = {
        dost : true,
        isfinite :false,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
       // nextArrow:<SampleNextArrow/>
       width:260
    }
    

        return (
            <div className='OutstandingDoctor' >
                   <div className='OutstandingDoctor-title' style={{paddingTop:'30px',height:'30px',width:'80%',margin:'auto',display:'flex'}}>
                    <h3>Bác sĩ nổi bật tuần qua</h3>
                  
                </div>
               <div className='OutstandingDoctor-conten'>
              
            
                  <Slider className='OutstandingDoctor-slider' {...settings}>
                  
                    <div className='OutstandingDoctor-img'>
                    <div className='backgroundImg-doctor'></div>
                    <a href='#'>Thạc sĩ, Bác sĩ Hứa Thúy Vy</a>
                    <p>Vô sinh , hiếm muộn</p>
                    </div>
                    <div className='OutstandingDoctor-img'>
                    <div className='backgroundImg-doctor'></div>
                    <a href='#'>Thạc sĩ, Bác sĩ Hứa Thúy Vy</a>
                    <p>Vô sinh , hiếm muộn</p>
                    </div>
                    <div className='OutstandingDoctor-img'>
                    <div className='backgroundImg-doctor'></div>
                     <a href='#'>Thạc sĩ, Bác sĩ Hứa Thúy Vy</a>
                    <p>Vô sinh , hiếm muộn</p>
                    </div>
                    <div className='OutstandingDoctor-img'>
                    <div className='backgroundImg-doctor'></div>
                     <a href='#'>Thạc sĩ, Bác sĩ Hứa Thúy Vy</a>
                    <p>Vô sinh , hiếm muộn</p>
                    </div>
                    <div className='OutstandingDoctor-img'>
                    <div className='backgroundImg-doctor'></div>
                     <a href='#'>Thạc sĩ, Bác sĩ Hứa Thúy Vy</a>
                    <p>Vô sinh , hiếm muộn</p>
                    </div>
                    <div className='OutstandingDoctor-img'   >
                    <div className='backgroundImg-doctor'></div>
                     <a href='#'>Thạc sĩ, Bác sĩ Hứa Thúy Vy</a>
                    <p>Vô sinh , hiếm muộn</p>
                    </div>

                </Slider>
               
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
