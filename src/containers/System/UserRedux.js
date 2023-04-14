import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import '../../scss/CustomForm.scss'
import * as actions from "../../store/actions"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableUser from './TableUser';
import {  notification, Space } from 'antd';
import { dispatch } from '../../redux';



const UserRedux = (props) =>{

    const [url,setUrl] = useState('')
    const [isOpen,setIsOpen] = useState(false)
    const [checkIfUser,setCheckIfUser] = useState({
        email:'',
        password:'',
        firsName:'',
        lastName:'',
        phoneNumber:'',
        address:'',
        gender:'',
        position:'',
        role:'',
        avatar:''
    })
    const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

   



       useEffect(()=>{
        //props.dispatch(actions.fetchGenderStart())
       
     handleGetData();
       
    
        })
        const handleGetData =async () =>{
           try{
            if(props.gender.length===0){
                await props.getGenderStart();

               
            }
           if(props.position.length===0){
            await props.getPositionStart()
           }
           if(props.role.length===0){
            await props.getRoleStart()
           }
           }catch(e){
            console.log(e)
           }
           
           
        }
       
  
    const handleGetFile = (e) =>{
         const data = e.target.files
         let file = data[0]
         let url = URL.createObjectURL(file)
         setUrl(url)
       checkIfUser.avatar=url
    
    }
     const handleSetOpend = () =>{
        if(url){
            setIsOpen(true)
        }
         

     }

     useEffect(()=>{
        if(props.isAlert){
            openNotificationWithIcon('success')
            dispatch(actions.saveUserfaile())
            setCheckIfUser({ email:'',
            password:'',
            firsName:'',
            lastName:'',
            phoneNumber:'',
            address:'',
            avatar:''
        })
            
         }

     },[props.isAlert])
     const handleSaveUser =async (event)=>{
        event.preventDefault()
        const isValide =   checkInput();
      
         if(isValide){
            await props.createUser(checkIfUser)
        
         }
        
     }
     const onChangeInput = (e)=>{
        const name = e.target.name
       
        const  copyIf = {...checkIfUser}
        copyIf[name]= e.target.value;

        if(copyIf.gender===''){
            copyIf.gender=props.gender[0].key
            setCheckIfUser({...copyIf})
            if(copyIf.position===''){
                copyIf.position=props.position[0].key
                setCheckIfUser({...copyIf})
                if(copyIf.role===''){
                    copyIf.role=props.role[0].key
                    setCheckIfUser({...copyIf})
                }else{
                    setCheckIfUser({...copyIf})
                }
            }else{
                setCheckIfUser({...copyIf})
            } 

        }else{
            setCheckIfUser({...copyIf})
        }
     
        //const { email, password,firsName,lastName,phoneNumber, address,gender,postion, role, avatar} = {...checkIfUser}
     }

    
  const checkInput = () =>{
       
    const arrCheck = Object.values(checkIfUser)
   
   let isValide= true
    for(var i=0;i<=arrCheck.length;i++){
       
       if(arrCheck[i]===''){
           alert('Please complete all information')
          isValide=false
           
            break; 
          
       }
    } 
    return isValide;
      }
  
     
    return(
        <div className="container">
             {contextHolder}
        <div className="container-content">
            <div className="row">
                <form >
                    <div className="form-row align-center">
                        <div className="form-title col-12 mt-3">
                            <h3>Create new user</h3>
                        </div>
                        <div className="display-flex-form ">
                            <label >Email</label>
                            <input type="text" className="form-control"
                                name="email" placeholder="Email"
                                value={checkIfUser.email}
                                onChange={(e)=>{onChangeInput(e)}}

                                />
                        </div>
                        <div className="display-flex-form ">
                            <label >Password</label>
                            <input type="text" className="form-control"
                                name="password" placeholder="Password"
                                value={checkIfUser.password}
                                onChange={(e)=>{onChangeInput(e)}}
                                />
                        </div>
                    </div>
                    <div className="form-row align-center">
                        <div className="display-flex-form ">
                            <label>First name</label>
                            <input type="text" className="form-control"
                                name="firsName" placeholder="First name"
                                value={checkIfUser.firsName}
                                onChange={(e)=>{onChangeInput(e)}}
                                />
                        </div>
                        <div className="display-flex-form ">
                            <label>Last name</label>
                            <input type="text" className="form-control"
                                name="lastName" placeholder="Last name"
                                value={checkIfUser.lastName}
                                onChange={(e)=>{onChangeInput(e)}}
                                />
                        </div>
                    </div>
                    <div className="display-flex-form">
                        <label >Address</label>
                        <input type="text" className="form-control" name="address"
                            placeholder="1234 Main St"
                            value={checkIfUser.address}
                            onChange={(e)=>{onChangeInput(e)}}
                            />
                    </div>

                   
                        <div className="display-flex-form ">
                            <label >Phone number</label>
                            <input type="text" className="form-control"
                                name="phoneNumber"
                                value={checkIfUser.phoneNumber}
                               
                                onChange={(e)=>{onChangeInput(e)}}
                                />
                        </div>

                        <div className="display-flex-form">
                            <label >Avatar</label>
                      
                            <input type="file" 
                                name="avata"
                                onChange={(e)=>handleGetFile(e) && onChangeInput(e)}
                                />
                                {url?(
                                 <div className='Avata-redux'>
                            <img onClick={()=>handleSetOpend()} src={url} />
                        </div>):''
                            }
                        </div>
                       
                        
                        <div className="display-flex-form col-md-10 margin-left-30">
                        <div className=" col-md-3">
                            <label >Sex</label>
                            <select name="gender" className="form-control "
                              
                              onChange={(e)=>{onChangeInput(e)}}
                            >
                               { props.gender.map(i => (
                                
                                     <option key={i.id} value={i.key}>{i.valueEN}</option>
                                ))}
                               
                               

                            </select>
                        </div>

                        <div className=" col-md-3">
                            <label >Position</label>
                            <select name="position" className="form-control" 
                             onChange={(e)=>{onChangeInput(e)}}
                            >
                                {props.position.map(i=>(
                                    <option key={i.id} value={i.key}>{i.valueEN}</option>
                                ))}
                                
                               

                            </select>
                        </div>

                        <div className=" col-md-3">
                            <label >Role</label>
                            <select name="role" className="form-control" 
                             onChange={(e)=>{onChangeInput(e)}}
                            >
                                {props.role.map(i=>(
                                      <option key={i.id} value={i.key}>{i.valueEN}</option>
                                ))}
                              
                             

                            </select>

                        </div>
                        </div>
                       
                    <button type='submit' onClick={(event)=>handleSaveUser(event)  }   className="btn btn-primary margin-left-30">Save User</button>
                 
                </form>
               
            </div>
           
          
        </div>

        <TableUser />
        <div style={{marginBottom:'100px'}}></div>
         {isOpen===true && (
          <Lightbox
            mainSrc={url}

            onCloseRequest={()=>setIsOpen(false)}
          />
        )} 
 
    </div>
    )
}
const mapStateToProps = state => {
    return {
        gender: state.admin.genders,
        position:state.admin.positions,
        role:state.admin.roles,
        isAlert:state.admin.isCreateUser

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart:()=>dispatch(actions.fetchGenderStart()),
        getPositionStart:()=>dispatch(actions.fetchPositionStart()),
        getRoleStart:()=>dispatch(actions.fetchRoleStart()),
        createUser:(data)=>dispatch(actions.createNewUser(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);