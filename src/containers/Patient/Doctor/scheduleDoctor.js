import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../../scss/Home/Patient/Doctor/headerDetaillDoctor.scss';
import { Col, Row, Select, Space, Tag } from 'antd';
import { useParams } from 'react-router-dom'
import { getScheduleDoctorApi } from '../../../services/doctor_services';
import { CalendarFilled } from '@ant-design/icons'
import { getDetailDoctor } from '../../../store/actions';
import { NumericFormat } from 'react-number-format';
import ModalSchedule from '../../../components/ModalSchedule';
import moment from 'moment';

const ScheduleDoctor = (props) => {
    const [valueDate, SetValueDate] = useState('')
    const { id } = useParams()
    const [dataSv, setDataSv] = useState([])
    const [isModal,setIsModal] = useState(false)
    const [propsDate,setPropDate] = useState('')
    const [timeType,setTimeType]=useState('')
    useEffect(() => {
        setUpDateSelect()
        props.getDetailDoctor(id)
       // setPriceModal(props.dataDetailDoctor.DoctorInfor.priceId!==null?props.dataDetailDoctor.DoctorInfor.priceId:"")
     

    }, [])
    useEffect(() => {
        //setPriceModal(props.dataDetailDoctor.DoctorInfor.priceId!==null?props.dataDetailDoctor.DoctorInfor.priceId:"")
                 
        handleGetDataTimeType()
    }, [valueDate])
    const handleGetDataTimeType = async () => {
        let dataTimeType = await getScheduleDoctorApi(id, valueDate)
        setDataSv(dataTimeType.data)
       
    }
    const setUpDateSelect = () => {
        const endOfMonth   = moment().endOf('month').format('DD');
        let date = new Date();
        let weekdays = date.getDay();
        let month = date.getMonth() + 1;
        let today = date.getDate()
        let year = date.getFullYear()
        let resultOptions = []
        let j = -1;
       
        for (let i = weekdays ; i <= 6; i++) {
            let objectResultOptions = {}
            let w = weekdays++

            j++
            let a;
            let b;
            if(today+j<=endOfMonth){
            if (w === 0) {
              
                a = `Chủ Nhật - ${today + j}/${month} `

            } else {
                a = `Thứ ${w + 1} - ${today + j}/${month}`
            }

          b = `${today + j}/0${month}/${year}`
          objectResultOptions.value = b;
          objectResultOptions.label = a
        }else{
            if (w === 0) {
              
                a = `Chủ Nhật - ${1 + j}/${month} `

            } else {
                a = `Thứ ${w + 1} - ${1 + j}/${month}`
            }

          b = `${1+ j}/0${month+1}/${year}`
          objectResultOptions.value = b;
          objectResultOptions.label = a

        }
           
            resultOptions.push(objectResultOptions)
        
        }
      
        if (valueDate === "") {
           
            SetValueDate(resultOptions[0].value.length<=9?`0${resultOptions[0].value}`:resultOptions[0].value)
        }
       if(propsDate==""){
        setPropDate(resultOptions[0].label)
       }
        return resultOptions

    }

    const options = setUpDateSelect()

    const handleChangeSelectDate = (e) => {
        SetValueDate(e.value.length===9?`0${e.value}`:e.value)
        setPropDate(e.label)

    }
    const handaleSetModal = (data)=>{
        setIsModal(!isModal)
       setTimeType(data)
    }
   
    return (


    

        <Row style={{ width: "100%" }}>
            <ModalSchedule 
            setOpenModal={isModal} 
            handaleSetModal={(e)=>handaleSetModal(e)} 
            dateSchedule ={propsDate}
            price={props.dataDetailDoctor ? props.dataDetailDoctor.DoctorInfor.priceId

                : ""}
                timeType={timeType}
            />
            <Col span={14} style={{ borderRight: "1px solid #ccc" }}>
                <Row>
                    <Select
                        labelInValue
                        defaultValue={options[0]}
                        style={{
                            width: 150,

                        }}
                        onChange={handleChangeSelectDate}
                        options={options}
                    />
                </Row>
                <Row style={{ marginTop: "30px" }}>
                    <Row style={{ width: "100%" }}>
                        <Col span={1}><CalendarFilled style={{ fontSize: "20px" }} /> </Col>
                        <Col span={3} > <h5>Lịch Khám</h5></Col>
                    </Row>
                    <Row>
                        <Space size={[0, 8]} wrap>
                            {dataSv && dataSv.length > 0 ? dataSv.map(i => (<Tag
                            onClick={()=>handaleSetModal(i.timeTypeData.valueEn )}
                                style={{ width: "150px", margin: '10px', height: "50px", textAlign: 'center', lineHeight: "50px" }}
                                color="gold">
                                {i.timeTypeData.valueEn}</Tag>)
                            ) : (<span>Chưa có lịch khám</span>)}

                        </Space>
                    </Row>

                </Row>
            </Col>
            <Col offset={1}>

                <p style={{ fontWeight: "bold", color: "#888" }}>ĐỊA CHỈ KHÁM</p>
                <p style={{ fontWeight: "bold" }}> {props.dataDetailDoctor ? props.dataDetailDoctor.DoctorInfor.nameClinic : ""}</p>
                <p > {props.dataDetailDoctor ? props.dataDetailDoctor.DoctorInfor.addressClinic
                    : ""}</p>
                <p ><span style={{ fontWeight: "bold", color: "#888" }}>GIÁ KHÁM : </span>

                    <span>
                        <NumericFormat
                            value= {props.dataDetailDoctor ? props.dataDetailDoctor.DoctorInfor.priceId

                                : ""}
                            thousandSeparator=","
                            displayType="text"
                            renderText={(value) => <b>{value} đ</b>}
                        />
                       .
                    </span></p>
                <p >Người bệnh  được ưu tiên khám  trước khi đặt lịch .</p>
                <p>Hình thức thanh toán :{props.dataDetailDoctor ? props.dataDetailDoctor.DoctorInfor.paymentId

                    : ""}.</p>
            </Col>
        </Row>





    );


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

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDoctor);
