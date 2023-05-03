
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../../scss/Home/Section/outstandingDoctor.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from 'react-router-dom'
import '../../../scss/Home/Patient/Doctor/DetailDoctor.scss'


const OutstandingDoctor = (props) => {

    let history = useHistory()
    const [dataDoctor, setdataDoctor] = useState([])
    const settings = {
        dost: true,
        isfinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // nextArrow:<SampleNextArrow/>
        width: 260
    }

    //console.log(props.doctorTop)
    const getImageDoctor = async () => {
        const doctor = await props.doctorTop
        setdataDoctor(doctor)




    }
    useEffect(() => {

        getImageDoctor()

    }, [props.doctorTop])

    const handleViewDoctor = async(data)=>{
    
      
        history.push(`/detail-doctor/${data.id}`)
    }
    return (
        <div className='OutstandingDoctor' >
            <div className='OutstandingDoctor-title' style={{ paddingTop: '30px', height: '30px', width: '80%', margin: 'auto', display: 'flex' }}>
                <h3>Bác sĩ nổi bật tuần qua</h3>

            </div>
            <div className='OutstandingDoctor-conten'>


                <Slider className='OutstandingDoctor-slider' {...settings}>
                    {
                        dataDoctor ? dataDoctor.map((item, index) => {
                            let imageBase64 = ''
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary')

                                return (
                                    <div className='OutstandingDoctor-img' key={index} onClick={ ()=>handleViewDoctor(item)} >
                                        <div className='backgroundImg-doctor' 
                                        style={{ backgroundImage: `url(${imageBase64})` }}
                                        ></div>
                                        <a href='#'>{
                                            item.positionId && item.positionId === 'P0' ? (<span>Bác sĩ</span>) : ''
                                        }
                                            {
                                                item.positionId && item.positionId === 'P1' ? (<span>Thạc sĩ</span>) : ''
                                            }
                                            {
                                                item.positionId && item.positionId === 'P2' ? (<span>Tiến sĩ</span>) : ''
                                            }
                                            {
                                                item.positionId && item.positionId === 'P3' ? (<span>Phó Giáo Sư</span>) : ''
                                            }
                                            {
                                                item.positionId && item.positionId === 'P4' ? (<span>Giáo Sư</span>) : ''
                                            }
                                            , Bác sĩ {item.lastName || item.firsName?(<><span>{item.lastName}</span> <span>{item.firstName}</span></>):''}</a>
                                        <p>Vô sinh , hiếm muộn</p>
                                    </div>
                                )
                            }
                        }) : ''
                    }
                </Slider>

            </div>

        </div>
    );


}

const mapStateToProps = state => {
    return {
   
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
