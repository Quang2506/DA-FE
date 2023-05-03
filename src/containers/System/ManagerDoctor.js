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

const ManagerDoctor = (props) => {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIconS = (type) => {
        api[type]({
            message: "Thêm Thành Công",

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
    const option = getValuesDocterSelect()
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const [GetStateDoctor, SetGetStateDoctor] = useState({
        doctorId: "",
        contenHTML: "",
        contenTEXT: "",
        decription: "",
        actions: reduxAction.CREATE

    })
    const [valueSelect, setValueSelect] = useState('')

    useEffect(() => {
        props.getAllDoctor()
    }, [])
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
            if (res && res.Markdown && res.Markdown.contentHTML && res.Markdown.contenMarkDown) {
                SetGetStateDoctor({
                    ...GetStateDoctor,
                    contenTEXT: res.Markdown.contenMarkDown,
                    contenHTML: res.Markdown.contentHTML,
                    decription: res.Markdown.description,
                    actions: reduxAction.EDIT
                })

            } else {
                SetGetStateDoctor({
                    ...GetStateDoctor,
                    contenTEXT: '',
                    contenHTML: '',
                    decription: '',
                    actions: reduxAction.CREATE
                })

            }
        }
        getDataDetailDoctor()
    }, [props.dataDetailDoctor])
    const handleChange = async (selectedOption) => {
        SetGetStateDoctor({
            ...GetStateDoctor,
            doctorId: selectedOption.value
        })
        setValueSelect(selectedOption.label)
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
    const handleSaveInfDoctor = async (event) => {
        if (GetStateDoctor.actions === "EDIT") {

            if (GetStateDoctor) {

                let res = await props.upDateDetailDoctor(GetStateDoctor)

                if (res.errorCode === 0) {
                    setValueSelect('')
                    openNotificationWithIconS('success')
                    SetGetStateDoctor({
                        doctorId: "",
                        contenHTML: "",
                        contenTEXT: "",
                        decription: ""
                    })
                }
            }
        } else {
            if (GetStateDoctor) {
                let alert = await props.postInfDoctor(GetStateDoctor)
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

    console.log('v', valueSelect)
    return (
        <div className='users.container '>
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
                <label style={{ marginBottom: "10px", fontWeight: "bold" }}> Chi Tiết Bác Sĩ:</label>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} value={GetStateDoctor.contenTEXT} />
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
        upDateDetailDoctor: (data) => dispatch(actions.updateDetailMarkdown(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDoctor);


