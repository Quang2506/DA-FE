
import React from 'react';
//import {FormattedMessage} from "react-intl"
import { connect } from 'react-redux';
import Img1 from '../../../assets/specialty_Img/120331-co-xuong-khop.jpg'
// import { languages } from '../../utils/constant';
//import { changeLanguageApp } from '../../store/actions/appActions';

import '../../../scss/Home/Section/Specialty.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Specialty = ()=> {

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
            <div className='specialty' >
                   <div className='spencialty-title' style={{paddingTop:'30px',height:'30px',width:'80%',margin:'auto',display:'flex'}}>
                    <h3>Chuyên khoa phổ biến</h3>
                  
                </div>
               <div className='spencialty-conten'>
              
            
                  <Slider className='specialty-slider' {...settings}>
                  
                    <div className='specialty-img'>
                    <img src={Img1}/>
                    <span>Cơ sương khớp</span>
                    </div>
                    <div className='specialty-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='specialty-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='specialty-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='specialty-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='specialty-img'   >
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
