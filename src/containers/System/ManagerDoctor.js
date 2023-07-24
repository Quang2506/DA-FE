import React, { useEffect, useState } from 'react';
//import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../../scss/System/UserManage.scss';
import '../../scss/cutom.scss';
import * as actions from "../../store/actions"
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import Select from 'react-select';
// import style manuallyimport 'react-markdown-editor-lite/lib/index.css';
import { Col, Row, Input } from 'antd';
import { notification } from 'antd';
import { reduxAction } from '../../utils';
import { getAllCodes } from '../../services/user_services';
const ManagerDoctor = (props) => {
    const [arr, setarr] = useState([])
    const [arrPaymentMethods, setArrPaymentMethods] = useState([])
    const [arrprovince, setArrProvince] = useState([])
    const [price, setPrice] = useState("")
    const [api, contextHolder] = notification.useNotification();
    const [dataInforDoctor, setDataInforDoctor] = useState({
        clinicName: "",
        clinicAddr: "",
        clinicNote: "",
        priceDoctor: "",
        paymentMethodsDoctor: "",
        provinceDoctor: ""
    })


    const openNotificationWithIconS = (type) => {
        api[type]({
            message: "Thêm Thành Công",

        });
    };


    const openNotificationWithIconinF = (type) => {
        api[type]({
            message: "Sửa Thành Công",

        });
    };
    const openNotificationWithIconF = (type) => {
        api[type]({
            message: "Thêm Thất Bại !",
        });
    };
    const getValuesDocterSelect = () => {
        let result = []
        if (props.dataDoctor) {
            props.dataDoctor.map(i => {
                let object = {}
                object.value = i.id
                object.label = `${i.lastName} ${i.firstName}`
                result.push(object)
            })
        }
        return result
    }

    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const [GetStateDoctor, SetGetStateDoctor] = useState({
        doctorId: "",
        contenHTML: "",
        contenTEXT: "",
        decription: "",
        actions: reduxAction.CREATE,
        clinicName: "",
        clinicAddr: "",
        clinicNote: "",
        priceDoctor: "",
        paymentMethodsDoctor: "",
        provinceDoctor: "",
        doctorName: ""


    })


    useEffect(() => {
        props.getAllDoctor()
        getOptionPrice()
        getOptionPaymentMethods()
        getOptionProvince()

    }, [])

    const [valueSelect, setValueSelect] = useState({})
    const getOptionPrice = async () => {
        let resPrice = await getAllCodes("PRICE")
        setarr(resPrice.data)
    }
    const getOptionPaymentMethods = async () => {
        let resPayMethods = await getAllCodes("PAYMENT")

        setArrPaymentMethods(resPayMethods.data)
    }
    const getOptionProvince = async () => {
        let resProvince = await getAllCodes("PROVINCE")

        setArrProvince(resProvince.data)
    }



    //const optionPrice=getPriceDoctorr()
    function handleEditorChange({ html, text }) {

        SetGetStateDoctor({
            ...GetStateDoctor,
            contenHTML: html,
            contenTEXT: text
        })
    }

    useEffect(() => {
        const getDataDetailDoctor = async () => {
            let res = await props.dataDetailDoctor
            if (res && res.Markdown
                && res.Markdown.contentHTML
                && res.Markdown.contenMarkDown
            ) {
                SetGetStateDoctor({
                    ...GetStateDoctor,
                    contenTEXT: res.Markdown.contenMarkDown,
                    contenHTML: res.Markdown.contentHTML,
                    decription: res.Markdown.description,
                    actions: reduxAction.EDIT,
                    clinicName: res.DoctorInfor.nameClinic ? res.DoctorInfor.nameClinic : "",
                    clinicAddr: res.DoctorInfor.addressClinic ? res.DoctorInfor.addressClinic : "",
                    clinicNote: res.DoctorInfor.note ? res.DoctorInfor.note : "",
                    priceDoctor: res.DoctorInfor.priceId ? res.DoctorInfor.priceId : '',
                    paymentMethodsDoctor: res.DoctorInfor.paymentId ? res.DoctorInfor.paymentId : "",
                    provinceDoctor: res.DoctorInfor.provinceId ? res.DoctorInfor.provinceId : "",
                })

            } else {
                SetGetStateDoctor({
                    ...GetStateDoctor,
                    contenTEXT: '',
                    contenHTML: '',
                    decription: '',
                    actions: reduxAction.CREATE,
                    clinicName: "",
                    clinicAddr: "",
                    clinicNote: "",
                    priceDoctor: "",
                    paymentMethodsDoctor: "",
                    provinceDoctor: "",
                })

            }
        }
        getDataDetailDoctor()
    }, [props.dataDetailDoctor])
    const handleChange = async (selectedOption) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            doctorId: selectedOption.value,
            doctorName: selectedOption.label
        })
        setValueSelect(selectedOption)
        await props.getDataDetailDoctor(selectedOption.value)
    };
    const handleChangeDes = (e) => {
        const value = e.target.value
        if (value) {
            SetGetStateDoctor({
                ...GetStateDoctor,
                decription: value
            })
        }
    }

    const option = getValuesDocterSelect()
    const handleChangePrice = (e) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            priceDoctor: e.target.value
        })
    }
    const handleChangePaymentMethods = (e) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            paymentMethodsDoctor: e.target.value
        })
    }
    const handleChangeProvince = (e) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            provinceDoctor: e.target.value
        })
    }
    const handleChaneNameClinic = (e) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            clinicName: e.target.value

        })
    }
    const handleAddClinic = (e) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            clinicAddr: e.target.value
        })
    }
    const handleNote = (e) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            clinicNote: e.target.value
        })
    }


    const handleSaveInfDoctor = async (event) => {
        if (GetStateDoctor.actions === "EDIT") {
            if (GetStateDoctor) {
                let res = await props.upDateDetailDoctor(GetStateDoctor)
                console.log(res)
                if (res.errorCode === 0) {
                    setValueSelect('')
                    openNotificationWithIconinF('info')
                    SetGetStateDoctor({
                        doctorId: "",
                        contenHTML: "",
                        contenTEXT: "",
                        decription: "",
                        clinicName: "",
                        clinicAddr: "",
                        clinicNote: "",
                        priceDoctor: "",
                        paymentMethodsDoctor: "",
                        provinceDoctor: "",
                    })
                    setValueSelect({})
                }
            }

        } else {
            if (GetStateDoctor && dataInforDoctor) {
                let alert = await props.postInfDoctor(GetStateDoctor)
                console.log(alert)
                if (alert && alert.errorCode === 0) {
                    openNotificationWithIconS('success')
                    SetGetStateDoctor({
                        doctorId: "",
                        contenHTML: "",
                        contenTEXT: "",
                        decription: ""
                    })
                } else {
                    openNotificationWithIconF('error')
                }
            } else {
                openNotificationWithIconF('error')
            }
        }
    }
    console.log(GetStateDoctor)

    return (
        <div >
            <div className='users-table mt-3 mx-3'>
                {contextHolder}
                <h3 style={{ textAlign: 'center', fontWeight: "bold" }}>Quản Lý  Thông Tin Bác Sĩ</h3>
                <Row style={{ marginBottom: '50px', marginTop: '50px' }} >
                    <Col span={10} >
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Chọn Bác Sĩ:</label>
                        <Select
                            value={valueSelect}
                            onChange={handleChange}
                            options={option}

                        />
                    </Col>
                    <Col span={12} offset={2}>
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>Giới Thiệu Bác Sĩ:</label>
                        <Input.TextArea
                            onChange={(e) => handleChangeDes(e)}
                            value={GetStateDoctor.decription}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Chọn Giá:</label>
                        <select
                            onChange={(e) => handleChangePrice(e)}
                            style={{ width: "100%", height: "45px", border: "0.5px solid #3333" }}

                        >
                            <optgroup label={price ? price : "Chọn giá khám (vnđ)"}>

                                {arr.length > 0 ? arr.map(i => (<option
                                    selected={i.valueVI === GetStateDoctor.priceDoctor ? 'selected' : ""}
                                    key={i.id}>{
                                        i.valueVI}
                                </option>)) : ''}
                            </optgroup>
                        </select>
                    </Col>
                    <Col span={7} offset={1}>
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Chọn Phương Thức Thanh Toán</label>
                        <select
                            onChange={(e) => handleChangePaymentMethods(e)}
                            style={{ width: "100%", height: "45px", border: "0.5px solid #3333" }}>
                            {arrPaymentMethods.length > 0 ? arrPaymentMethods.map(i => (<option
                                selected={i.valueVI === GetStateDoctor.paymentMethodsDoctor ? 'selected' : ""}
                                key={i.id}>{i.valueVI}
                            </option>)) : ''}
                        </select>
                    </Col>

                    <Col span={8} offset={1}>
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Chọn Tỉnh Thành</label>
                        <select

                            onChange={(e) => handleChangeProvince(e)}
                            style={{ width: "100%", height: "45px", border: "0.5px solid #3333" }}>
                            {arrprovince.length > 0 ? arrprovince.map(i => (<option
                                key={i.id}
                                selected={i.valueVI === GetStateDoctor.provinceDoctor ? 'selected' : ""}
                            >
                                {i.valueVI}
                            </option>)) : ''}
                        </select>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '50px', marginTop: '50px' }} >
                    <Col span={7}>
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Tên Phòng Khám:</label>
                        <input
                            style={{ width: "100%", height: "45px", border: "0.5px solid #3333" }}
                            type='text'
                            onChange={(e) => handleChaneNameClinic(e)}
                            value={GetStateDoctor.clinicName}
                        />
                    </Col>
                    <Col span={7} offset={1}>
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Địa chỉ phòng khám</label>
                        <input
                            style={{ width: "100%", height: "45px", border: "0.5px solid #3333" }}
                            type='text'
                            onChange={(e) => handleAddClinic(e)}
                            value={GetStateDoctor.clinicAddr}
                        />
                    </Col>

                    <Col span={8} offset={1}>
                        <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Ghi Chú </label>
                        <input
                            style={{ width: "100%", height: "45px", border: "0.5px solid #3333" }}
                            type='text'
                            onChange={(e) => handleNote(e)}
                            value={GetStateDoctor.clinicNote}
                        />
                    </Col>
                </Row>
                <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Chi Tiết Bác Sĩ:</label>
                <MdEditor style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)} onChange={handleEditorChange}
                    value={GetStateDoctor.contenTEXT} />
                {GetStateDoctor.actions === 'EDIT' ? (<button
                    style={{ marginTop: '50px', marginBottom: '50px', background: 'Yellow', color: 'red' }}
                    type='submit' onClick={(event) => handleSaveInfDoctor(event)}
                    className="btn   margin-left-60">
                    Lưu Thông Tin
                </button>) : (
                    <button
                        style={{ marginTop: '50px', marginBottom: '50px' }}
                        type='submit' onClick={(event) => handleSaveInfDoctor(event)}
                        className="btn btn-primary  margin-left-60">
                        Thêm Thông Tin
                    </button>
                )}
            </div>
        </div>

    );
}

const mapStateToProps = state => {

    return {
        dataDoctor: state.admin.dataDoctor,
        dataDetailDoctor: state.admin.dataDetailDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.fetchAllDoctorStart()),
        postInfDoctor: (data) => dispatch(actions.saveInfDoctor(data)),
        getDataDetailDoctor: (id) => dispatch(actions.getDetailDoctor(id)),
        upDateDetailDoctor: (data) => dispatch(actions.updateDetailMarkdown(data)),
        getPriceAllCodes: () => dispatch((actions.fetchPriceAllCode()))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDoctor);


