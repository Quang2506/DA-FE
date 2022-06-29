import React from "react";
import '../../../scss/medicalFacility.scss'

//import { Redirect } from 'react-router-dom';
//import { Input } from 'reactstrap';
//import {FormattedMessage} from "react-intl"
//import { connect } from 'react-redux';
import Img1 from '../../../assets/MedicalFacility/095119-benh-vien-cho-ray-h1.jpg'
// import { languages } from '../../utils/constant';
//import { changeLanguageApp } from '../../store/actions/appActions';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MedicalFacility = ()=> {

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
            <div className='MedicalFacility' >
                   <div className='MedicalFacility-title' style={{paddingTop:'30px',height:'30px',width:'80%',margin:'auto',display:'flex'}}>
                    <h3>Cơ sở y tế nổi bật</h3>
                  
                </div>
               <div className='MedicalFacility-conten'>
              
            
                  <Slider className='MedicalFacility-slider' {...settings}>
                  
                    <div className='MedicalFacility-img'>
                    <img src={Img1}/>
                    <span>Cơ sương khớp</span>
                    </div>
                    <div className='MedicalFacility-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='MedicalFacility-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='MedicalFacility-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='MedicalFacility-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='MedicalFacility-img'   >
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>

                </Slider>
               
               </div>
             
            </div>
        );
 

}


export default MedicalFacility