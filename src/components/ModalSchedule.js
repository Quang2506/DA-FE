import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Col, Row, notification } from 'antd';
import './ConfirmModal.scss';
import { useParams } from 'react-router-dom'
import ProFileDoctorModal from "../containers/Patient/Doctor/profileDoctorModal";
import '../scss/Home/Patient/Doctor/DetailDoctor.scss'
import { fetchGenderStart } from '../store/actions';
import { createPatienBooking } from '../services/patient'
const MoDalSchedule = (props) => {
    const { id } = useParams()
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        if (type === "success") {
            api[type]({
                message: 'Thêm Thành Công',

            });
        }

        if (type === "error") {
            api[type]({
                message: 'Vui Lòng Không Để Trống Thông Tin',

            });
        }
    };
    const [valueModel, setValueModel] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        address: '',
        reason: '',
        doctorId: '',
        gender: '',
        birthDay: '',
        timeType: '',
        date: ''
    })

    useEffect(() => {
        props.getGender()
       


    }, [])




    const handaleOnchaneInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        let arrValueModel = { ...valueModel }
        arrValueModel[name] = value
        arrValueModel.timeType = props.timeType
        arrValueModel.date = props.dateSchedule
        arrValueModel.doctorId = id


        if (props.dataGender) {
            if (valueModel.gender === "") {
                arrValueModel.gender = props.dataGender[0].valueVI
                setValueModel({ ...arrValueModel })
            } else {

                setValueModel({ ...arrValueModel })
            }
        }

    }

    const checkInputModal = () => {
      
        let arrCheck = Object.values(valueModel)

        for (let index = 0; index < arrCheck.length; index++) {

            if (arrCheck[index] === "") {
                openNotificationWithIcon('error')
                break;
            } else {
                openNotificationWithIcon('success')
                createPatienBooking(valueModel)

                setValueModel({
                    fullName: '',
                    phoneNumber: '',
                    email: '',
                    address: '',
                    reason: '',
                    gender: '',
                    birthDay: '',
                    timeType: '',
                    date: ''
                })
                break;
            }

        }


    }


    const handleOnokModal = () => {
        checkInputModal()
    }

    return (
        <>

            <Modal

                title="Thông tin đặt lịch khám bệnh"
                open={props.setOpenModal}
                onOk={() => handleOnokModal()}
                onCancel={() => props.handaleSetModal()}
            >
                {contextHolder}
                <Row >
                    <ProFileDoctorModal
                        dateSchedule={props.dateSchedule}
                        price={props.price}
                    /></Row>

                <Row style={{ margin: "20px 0" }}>
                    <Col span={11}>
                        <label>Họ Tên</label>
                        <input
                            name="fullName"
                            type="text"
                            style={{ width: "100%" }}
                            onChange={(e) => handaleOnchaneInput(e)}
                            value={valueModel.fullName}
                        />
                    </Col>

                    <Col span={11} offset={2}>
                        <label>Số Điện Thoại</label>
                        <input
                            name="phoneNumber"
                            type="text"
                            style={{ width: "100%" }}
                            onChange={(e) => handaleOnchaneInput(e)}
                            value={valueModel.phoneNumber}
                        />
                    </Col>
                </Row>
                <Row style={{ margin: "20px 0" }}>
                    <Col span={11}>
                        <label>Địa Chỉ email</label>
                        <input
                            name="email"
                            type="text"
                            style={{ width: "100%" }}
                            onChange={(e) => handaleOnchaneInput(e)}
                            value={valueModel.email}
                        />
                    </Col>

                    <Col span={11} offset={2}>
                        <label>Địa chỉ liên hệ</label>
                        <input
                            name="address"
                            type="text"
                            style={{ width: "100%" }}
                            onChange={(e) => handaleOnchaneInput(e)}
                            value={valueModel.address}
                        />
                    </Col>
                </Row>
                <Row style={{ margin: "20px 0" }}>
                    <Col span={24}>
                        <label>Lí do khám</label>
                        <input
                            name="reason"
                            type="text"
                            style={{ width: "100%" }}
                            onChange={(e) => handaleOnchaneInput(e)}
                            value={valueModel.reason}
                        />
                    </Col>


                </Row>

                <Row style={{ margin: "20px 0" }}>
                    <Col span={11}>
                        <label>Ngày sinh</label>
                        <input
                            name="birthDay"
                            type="text"
                            style={{ width: "100%" }}
                            onChange={(e) => handaleOnchaneInput(e)}
                            value={valueModel.birthDay}
                        />
                    </Col>

                    <Col span={11} offset={2}>
                        <label>Giới tính</label>
                        <select
                            style={{ width: "100%", height: "60%" }}
                            onChange={(e) => handaleOnchaneInput(e)}
                            name="gender"
                        >
                            {props.dataGender ? props.dataGender.map(i => (
                                <option >{i.valueVI}</option>
                            )) : ""}
                        </select>
                    </Col>
                </Row>

            </Modal>
        </>
    );


}


const mapStateToProps = state => {
    return {
        dataGender: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGender: () => dispatch(fetchGenderStart())
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(MoDalSchedule);