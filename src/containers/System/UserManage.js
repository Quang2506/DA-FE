import React, { useEffect,useState} from 'react';
//import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../../scss/UserManage.scss';
import '../../scss/cutom.scss';
import {
    getAllUser,
    createUser,
    deleteUser,
    editUser
} from '../../services/user_services'
import ModalUser from './ModalUser';
const UserManage = ()=> {
    const [record,setRecord] = useState([])
    const [isOpenModal,setIsOpenModal] = useState(false)
    const [dataEdit,setDataEdit] = useState('')
    const [save,setSave] = useState()
    const [disable,setDisable] = useState()
    const  getDataUser = async ()=>{
        const dataUser =await getAllUser('ALL')
        if(dataUser.errcode===0){
            setRecord(dataUser.user)
        } 
        
   }    
     useEffect(()=>{
        
    
        getDataUser() 
    
     },[])
   
    
     const handleModalUser = ()=>{
         setIsOpenModal(true)
         setSave(false)
         setDisable(false)

     }
     const toggleUserModal = ()=>{
         setIsOpenModal(!isOpenModal)
     }
     const createNewUser =async (data)=>{
         if(data){
          const res =   await createUser(data)
          if(res.errCode !==0){
            alert(res.message)
          }else{
              await getDataUser()
              setIsOpenModal(false)
          }
         }
     }
  
     const handleDeleteUser = async(data) =>{
     
            if(data){
                const res = await deleteUser(data.id)
                console.log(res.data.errCode)
                if(res.data && res.data.errCode ===0){
                    getDataUser()
                }else{
                    alert(res.message)
                }
            }


       
     }
     const handleEditUser =async (data)=>{
          setIsOpenModal(!isOpenModal)
          setDataEdit(data)
          setSave(true)
          setDisable(true)

     }
   const editUserApi = async(data) =>{
       const res =await editUser(data)
       console.log('aaâ',res.data.errCode)
       if(res.data.errCode !==0){
        alert(res.message)
      }else{
          await getDataUser()
          setIsOpenModal(false)
      }
   }
        return (
            <div className='users.container '>
                <ModalUser
                isOpen= {isOpenModal}
                toggle={toggleUserModal}
                createNewUser = {createNewUser}
                dataEdit = {dataEdit}
                save={save}
                disable={disable}
                handleModalUser={handleModalUser}                   
                editUserApi = {editUserApi}
                />
                <div className="title text-center">Manage users</div>
                <div className='users-table mt-3 mx-3'>
                  <div className='margin-10 '>
                      <button 
                      type="button" 
                      className="btn btn-primary px-3 hover-red"
                      onClick={()=>handleModalUser()}
                      >
                          <i className="fa fa-plus " aria-hidden="true"></i>
                         <span className='margin-l10'> Add New Users</span>
                          </button>
                      </div>
                
                    <table id="customers">
                    <thead>
                    <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                    {record.map(item=>(
                    <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.email}</td>
                    <td  className='display-flex-start'>
                      <button 
                      className='btn btn-primary btn-edit-size mgl-10'
                       onClick={()=> handleEditUser(item) }>
                           Edit
                           </button>
                      <button 
                      className="btn btn-danger btn-delete-size mgl-10" 
                      onClick={()=>handleDeleteUser(item)}
                      >Delete
                      </button>
                    </td>
                    </tr>
                       ))}
                    </tbody>
                    
                
                      </table>
                    
                   
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
