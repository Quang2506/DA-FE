import React from "react";

//import { Redirect } from 'react-router-dom';
//import { Input } from 'reactstrap';
//import {FormattedMessage} from "react-intl"
//import { connect } from 'react-redux';
import Img1 from '../../../assets/HandBool/143055-boc-rang-su-gia-bao-nhieu.jpg'
// import { languages } from '../../utils/constant';
//import { changeLanguageApp } from '../../store/actions/appActions';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../scss/Home/Section/HandBool.scss'
const HandBool = ()=> {

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
            <div className='HandBool' >
                   <div className='HandBool-title' style={{paddingTop:'30px',height:'30px',width:'80%',margin:'auto',display:'flex'}}>
                    <h3>Cẩm Nang</h3>
                  
                </div>
               <div className='HandBool-conten'>
              
            
                  <Slider className='HandBool-slider' {...settings}>
                  
                    <div className='HandBool-img'>
                    <img src={Img1}/>
                    <span>Cơ sương khớp</span>
                    </div>
                    <div className='HandBool-img'>
                    <h3><a href="#">Bọc Răng Sứ Bao Nhiêu Tiền?Giá Bọc Răng Sứ Tại TPHCM</a></h3>
                    </div>
                    <div className='HandBool-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='HandBool-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='HandBool-img'>
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>
                    <div className='HandBool-img'   >
                    <img src={Img1}/>
                    <div>Cơ sương khớp</div>
                    </div>

                </Slider>
               
               </div>
             
            </div>
        );
 

}


export default HandBool