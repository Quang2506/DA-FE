import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../../../scss/Home/Patient/Doctor/DetailDoctor.scss'
import { getDetailDoctor } from '../../../store/actions';
import { Row, Col } from 'antd';
import { NumericFormat } from 'react-number-format';
const ProFileDoctorModal = (props) => {
    const params = useParams()
    const { id } = params
    const [image, SetImage] = useState('')
    useEffect(() => {
        props.getDetailDoctor(id)

    }, [])
    useEffect(() => {

        if (props.dataDetailDoctor) {
            let imageDoctor = getImageDoctor()
            SetImage(imageDoctor)

        }


    }, [props.dataDetailDoctor])
    console.log(props)

    const getImageDoctor = () => {
        let imageBase64 = ''
        if (props.dataDetailDoctor) {

            imageBase64 = new Buffer(props.dataDetailDoctor.image, 'base64').toString('binary')
        }
        return imageBase64
    }


    return (
        <>



            <Row style={{width:"100%"}} >
                <Col  span={4} >
                    {
                        image ? (

                            <div className='img-detailDoctor-profile ' style={{ backgroundImage: `url('${image}')` }} > </div>

                        )

                            : ''}


                </Col>
                <Col offset={1} >
                    <h3>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P0' ? (<span>Bác sĩ ,{props.dataDetailDoctor.lastName
                    } {props.dataDetailDoctor.firstName}</span>) : ''}</h3>
                    <h3>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P1' ? (<span>Thạc sĩ,{props.dataDetailDoctor.lastName}
                     {props.dataDetailDoctor.firstName}</span>) : ''}</h3>
                    <h3>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P2' ? (<span>Tiến sĩ,{props.dataDetailDoctor.lastName
                    } {props.dataDetailDoctor.firstName}</span>) : ''}</h3>
                    <h3>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P3' ? (<span>Phó Giáo Sư,{props.dataDetailDoctor.lastName
                    }{props.dataDetailDoctor.firstName}</span>) : ''}</h3>
                    <h3>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P4' ? (<span>Giáo Sư,{props.dataDetailDoctor.lastName
                    } {props.dataDetailDoctor.firstName}</span>) : ''}</h3>
                    <div style={{background:"#EEEEEE",padding:"10px"}}>
                    <p>Ngày khám : {props.dateSchedule} .</p>
                    <p> Giá tiền: <NumericFormat
                            value= {props.price}
                            thousandSeparator=","
                            displayType="text"
                            renderText={(value) => <b>{value} đ</b>}
                        />.</p>
                        <p>Miễn phí đặt lịch .</p>
                    </div>
                </Col>



            </Row>









        </>
    )
}

const mapStateToProps = state => {

    return {
        dataDetailDoctor: state.admin.dataDetailDoctor

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDetailDoctor: (id) => { dispatch(getDetailDoctor(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProFileDoctorModal);