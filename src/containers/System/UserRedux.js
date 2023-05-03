import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import '../../scss/System/CustomForm.scss'
import * as actions from "../../store/actions"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableUser from './TableUser';
import { notification } from 'antd';
import { dispatch } from '../../redux';
import { reduxAction,CommonUtils } from '../../utils';





const UserRedux = (props) => {

    const [url, setUrl] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [checkIfUser, setCheckIfUser] = useState({
        email: '',
        password: '',
        firsName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        gender: '',
        position: '',
        role: '',
        avatar: '',
        actions: reduxAction.CREATE,
        id:0
    })
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        if(type==="success"){
            api[type]({
                message: 'Thêm Thành Công',
               
            });
        }
        
        if(type==="info"){
            api[type]({
                message: 'Lưu Thành Công',
               
            });
        }
    };





    useEffect(() => {
        //props.dispatch(actions.fetchGenderStart())

        handleGetData();


    })
    const handleGetData = async () => {
        try {
            if (props.gender.length === 0) {
                await props.getGenderStart();


            }
            if (props.position.length === 0) {
                await props.getPositionStart()
            }
            if (props.role.length === 0) {
                await props.getRoleStart()
            }
        } catch (e) {
            console.log(e)
        }


    }


    
    const converImage =async (image)=>{
        let urlBase64 =""
        if(image){
            urlBase64 =await  CommonUtils.getBase64(image)
        
            let url = URL.createObjectURL(image)
            setUrl(url)
           
          
            
        }
        return urlBase64
      
    }
    const handleSetOpend = () => {
        if (url) {
            setIsOpen(true)
        }


    }

    useEffect(() => {
        if (props.isAlert) {
            if(checkIfUser.actions==="CREATE"){
                openNotificationWithIcon('success')
            }if(checkIfUser.actions==="EDIT"){
                openNotificationWithIcon('info')
            }
           
            dispatch(actions.saveUserfaile())
            let arrgender = props.gender
            let arrposition = props.position
            let arrrole = props.role
            setCheckIfUser({
                email: '',
                password: '',
                firsName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                avatar: '',
                gender: arrgender && arrgender.length > 0 ? arrgender[0].key : '',
                position: arrposition && arrposition.length > 0 ? arrposition[0].key : '',
                role: arrrole && arrrole.length > 0 ? arrrole[0].key : '',
                actions:reduxAction.CREATE
         
            })
            setUrl('')

        }


    }, [props.isAlert])
  

    const handleSaveUser = async (event) => {
        event.preventDefault()
        const isValide = checkInput();
        let actions=checkIfUser.actions
       

        if (isValide&&actions==="CREATE") {
            await props.createUser(checkIfUser)

        }if(isValide&&actions==="EDIT"){
            await props.updateUser(checkIfUser)

        
        }

    }
    const onChangeInput =async (e) => {
        const name = e.target.name
        const copyIf = { ...checkIfUser }
        
       if(name==="avatar"){
        let data = e.target.files
        let file = data[0]
        let base64 =await converImage(file)
        copyIf[name]=base64
       }else{
        copyIf[name] = e.target.value;
       }
            
        if (copyIf.gender === '') {
            copyIf.gender = props.gender[0].key
            setCheckIfUser({ ...copyIf })
            if (copyIf.position === '') {
                copyIf.position = props.position[0].key
                setCheckIfUser({ ...copyIf })
                if (copyIf.role === '') {
                    copyIf.role = props.role[0].key
                    setCheckIfUser({ ...copyIf })
                } else {
                    setCheckIfUser({ ...copyIf })
                }
            } else {
                setCheckIfUser({ ...copyIf })
            }

        } else {
            setCheckIfUser({ ...copyIf })
        }

        //const { email, password,firsName,lastName,phoneNumber, address,gender,postion, role, avatar} = {...checkIfUser}
    }


    const checkInput = () => {

        const arrCheck = Object.values(checkIfUser)

        let isValide = true
        for (var i = 0; i <= arrCheck.length; i++) {

            if (arrCheck[i] === '') {
                alert('Please complete all information')
                isValide = false

                break;

            }
        }
        return isValide;
    }
    
    const handleGetInforUserEdit =async (user) => {
        let imageBase64="";
        if(user.image){
           imageBase64 = new Buffer(user.image,'base64').toString('binary')
                
            

        }
       setUrl(imageBase64)
     
        setCheckIfUser({
            email: user.email,
            password: 'handCode',
            firsName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            avatar:imageBase64,
            actions: reduxAction.EDIT,
            id:user.id
        })
    }
    return (
        <div className="container">
            {contextHolder}
            <div className="container-content">
                <div className="row">
                    <form >
                        <div className="form-row align-center">
                            <div className="form-title col-12 mt-3">
                                {checkIfUser.actions==="EDIT"?(<h3>Sửa Người Dùng</h3>):(
                                    <h3>Thêm Mới Người Dùng</h3>
                                )}
                               
                            </div>
                            <div className="display-flex-form ">
                                <label >Email</label>
                                {checkIfUser.actions==="EDIT"?(
                                      <input type="email" className="form-control"
                                      name="email" placeholder="Email"
                                      value={checkIfUser.email}
                                      disabled
  
                                  />
                                ):(
                                    <input type="email" className="form-control"
                                    name="email" placeholder="Email"
                                    value={checkIfUser.email}
                                    onChange={(e) => { onChangeInput(e) }}

                                />
                                )}
                               
                            </div>


                            <div className="display-flex-form ">
                                <label >Password</label>
                                {checkIfUser.actions==="EDIT"?(
                                   < input type="password" className="form-control"
                                    name="password" placeholder="Password"
                                    value={checkIfUser.password}
                                    disabled
                                />
                                ):(
                                    <input type="password" className="form-control"
                                    name="password" placeholder="Password"
                                    value={checkIfUser.password}
                                    onChange={(e) => { onChangeInput(e) }}
                                />
                                )}
                               
                            </div>
                        </div>
                        <div className="form-row align-center">
                            <div className="display-flex-form ">
                                <label>First name</label>
                                <input type="text" className="form-control"
                                    name="firsName" placeholder="First name"
                                    value={checkIfUser.firsName}
                                    onChange={(e) => { onChangeInput(e) }}
                                />
                            </div>
                            <div className="display-flex-form ">
                                <label>Last name</label>
                                <input type="text" className="form-control"
                                    name="lastName" placeholder="Last name"
                                    value={checkIfUser.lastName}
                                    onChange={(e) => { onChangeInput(e) }}
                                />
                            </div>
                        </div>
                        <div className="display-flex-form">
                            <label >Address</label>
                            <input type="text" className="form-control" name="address"
                                placeholder="1234 Main St"
                                value={checkIfUser.address}
                                onChange={(e) => { onChangeInput(e) }}
                            />
                        </div>


                        <div className="display-flex-form ">
                            <label >Phone number</label>
                            <input type="text" className="form-control"
                                name="phoneNumber"
                                value={checkIfUser.phoneNumber}

                                onChange={(e) => { onChangeInput(e) }}
                            />
                        </div>

                        <div className="display-flex-form">
                            <label >Avatar</label>

                            {url ? (<input type="file"
                               
                                name="avatar"
                                onChange={(e) => onChangeInput(e)}
                            />) : (<input type="file"
                                value=""
                                name="avatar"
                                onChange={(e) =>  onChangeInput(e)}
                            />)
                            }
                               </div>
                            {url ? (
                                <div className='Avata-redux' >
                                    <img onClick={()=>handleSetOpend()} src={url} />
                                   
                                </div>) : ''
                            }


                     



                        <div className="display-flex-form col-md-10 margin-left-30">
                            <div className=" col-md-3">
                                <label >Sex</label>
                                <select name="gender" className="form-control "
                                    value={checkIfUser.gender}
                                    onChange={(e) => { onChangeInput(e) }}
                                >
                                    {props.gender.map(i => (

                                        <option key={i.id} value={i.key}>{i.valueVI}</option>
                                    ))}



                                </select>
                            </div>

                            <div className=" col-md-3">
                                <label >Position</label>
                                <select
                                    value={checkIfUser.position}
                                    name="position" className="form-control"
                                    onChange={(e) => { onChangeInput(e) }}
                                >
                                    {props.position.map(i => (
                                        <option key={i.id} value={i.key}>{i.valueVI}</option>
                                    ))}



                                </select>
                            </div>

                            <div className=" col-md-3">
                                <label >Role</label>
                                <select name="role"
                                    value={checkIfUser.role}
                                    className="form-control"
                                    onChange={(e) => { onChangeInput(e) }}
                                >
                                    {props.role.map(i => (
                                        <option key={i.id} value={i.key}>{i.valueVI}</option>
                                    ))}



                                </select>

                            </div>
                        </div>
                        {checkIfUser.actions === "EDIT" ? (
                        <button style={{background:"Yellow",color:'red'}} type='submit' onClick={(event) => handleSaveUser(event)} className="btn  margin-left-60">Save changes</button>) : (
                        <button type='submit' onClick={(event) => handleSaveUser(event)} className="btn btn-primary margin-left-60">Save User</button>)}



                    </form>

                </div>


            </div>

            <TableUser
                getInforUserEdit={handleGetInforUserEdit}
            />
            <div style={{ marginBottom: '100px' }}></div>
            {isOpen === true && (
                <Lightbox
                    mainSrc={url}

                    onCloseRequest={() => setIsOpen(false)}
                />
            )}

        </div>
    )
}
const mapStateToProps = state => {
    return {
        gender: state.admin.genders,
        position: state.admin.positions,
        role: state.admin.roles,
        isAlert: state.admin.isCreateUser

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createUser: (data) => dispatch(actions.createNewUser(data)),
        updateUser:(data)=>dispatch(actions.updateUserRedux(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);