import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Row, Col, DatePicker, Button ,message} from "antd";
import Select from 'react-select';
import '../../scss/System/SchduleManager.scss'
import dayjs from 'dayjs'
import * as actions from "../../store/actions"
import { Tag, Space } from 'antd'
import {createscheduleDoctorApi} from  "../../services/doctor_services"
const Schedule = (props) => {
    const [date, SetDate] = useState('')
    const [timeAllCode, SetTimeAllCode] = useState([])
    const [selectionTime, setSelectionTime] = useState([])
    const [doctorId,setDoctorId] = useState()
    const [medicalEDay,setMedicalEDay]=useState('')
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Thêm lịch khám thành công',
        });
      };
      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'thêm lịch khám thất bại',
        });
      };

    useEffect(() => {
        getDateToday()
        getTimeAllCode()
        props.getAllDoctor()
      

    }, [])
 
    const getDoctorOption = () => {
        let arrOptions = [];

        if (props.dataDoctor) {
            props.dataDoctor.map(i => {
                let objectValueOption = {}
                objectValueOption.value = i.id
                objectValueOption.label = `${i.lastName} ${i.firstName}`
                arrOptions.push(objectValueOption)

            })

        }


        return arrOptions
    }
    const options = getDoctorOption()
    const getTimeAllCode = async () => {

        let recordData = await props.getTimeAllCode()
        if (recordData && recordData.data) {

            let arrTime = []
            recordData.data.map(item => {
                let timeCode = { ...item, isActive: false }
                arrTime.push(timeCode)

            })
            SetTimeAllCode(arrTime)

        }

    }

    const getDateToday = () => {
        let date = new Date();
        let dayToday = date.getDate()
        let monthToday = date.getMonth() + 1
        let yearToday = date.getFullYear()

        formatDate(dayToday, monthToday, yearToday)

    }
    const formatDate = async (getday, getmonth, getyear) => {
        let day = ''
        let month = ''
        let year = `${getyear}`
        getday <9 ? day = `0${getday}` : day = `${getday}`
        getmonth< 9 ? month = `0${getmonth}` : month = `${getmonth}`

        let dateToday = ''
        if (day && month && year) {
            dateToday = await `${day}/${month}/${year}`
            SetDate(dateToday)
            if(!medicalEDay||medicalEDay===""){
               
                setMedicalEDay(dateToday)
    
               }
        }
    }
//console.log(date)
    const hadaleCheckWorkingTime = (item) => {
        let arrGetCheck = []

        if (timeAllCode && timeAllCode.length > 0) {
            timeAllCode.map(i => {
                if (item.id === i.id) {

                    i.isActive = !i.isActive
                    arrGetCheck.push(i)


                } else {
                    arrGetCheck.push(i)
                }
            })
        }
        SetTimeAllCode(arrGetCheck)

    }


    const handleOnchaneDoctor = (e) => {
        let id = e.value
       setDoctorId(id)
    }
    const handleOnchaneDate = (date, dateString) => {
     
        
      
       setMedicalEDay(dateString)
        
    }
    const checkInformation =async () => {
        let arrResult =[]
     
         if (timeAllCode && timeAllCode.length > 0) {
            let timeisActive =await timeAllCode.filter(item =>
                item.isActive === true)
                if(!timeisActive||timeisActive.length===0){
                    error()
                    return;
                
                }else{
                  
                    
                    timeisActive.map(i=>{
                        let obj={}
                        obj.timeType=i.key
                        obj.doctorId= doctorId
                        obj.date = medicalEDay
                        arrResult.push(obj)
                    })
                   
                 await  createscheduleDoctorApi({arrResult:arrResult,doctorId:doctorId,date:medicalEDay})
                }
          
        }
          
       
        
    }
    const confirmSave =async ()=>{
        console.log(selectionTime)
       
        if(!doctorId||selectionTime.length<=0){
            error()
            return
        }
        
        if(doctorId!==""&&selectionTime.length>0){
           
            success() 
           checkInformation()
          }
         
      
        
        
    }
    
   console.log(selectionTime)
    const handleSaveSchedule = () => {

        
        confirmSave()
       
    }
    return (
        < div className="container-Schedule ">
             {contextHolder}
            <h3>Quản Lý Kế Hoạch Khám Bệnh</h3>
            <Row>

                <Col span={10}>

                    <label>Chọn Bác Sĩ :</label>
                    <Select options={options}
                        onChange={(e) => handleOnchaneDoctor(e)}
                    />


                </Col>
                <Col span={10} offset={4}>
                    <Row><label>Chọn Ngày Khám: </label></Row>
                    {date ? (<DatePicker
                        defaultValue={dayjs(`${date}`, 'DD/MM/YYYY')}
                        format='DD/MM/YYYY'
                        style={{ height: '40px', width: '100%' }}
                        onChange={handleOnchaneDate}
                    />) : ''}

                </Col>
            </Row>
            <Row style={{ marginTop: "30px" }}>
                <Col span={24}><label>Chọn Ca Khám Bệnh:</label></Col>
                <Col>
                    <Space size={[0, 8]} wrap>
                        {

                            timeAllCode ? timeAllCode.map(i => (

                                <Tag
                                    key={i.id}
                                    className="tag"
                                    color={i.isActive === true ? "green" : 'red'}
                                    onClick={() => hadaleCheckWorkingTime(i)}
                                >
                                    {i.valueEN}
                                </Tag>
                            )
                            ) : ''
                        }


                    </Space>
                </Col>

            </Row>
            <Button
                style={{ marginBottom: '100px' }}
                onClick={() => handleSaveSchedule()}
                type="primary">
                Lưu thông tin
            </Button>
        </ div>
    )
}
const mapStateToProps = state => {

    return {
        dataDoctor: state.admin.dataDoctor

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTimeAllCode: () => dispatch(actions.fetchTimeAllCode()),
        getAllDoctor: () => dispatch(actions.fetchAllDoctorStart())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
