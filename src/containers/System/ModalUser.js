import React, { useState,useEffect } from 'react';
//import { FormattedMessage } from 'react-intl';
import '../../scss/cutom.scss';
import { 
      Button,
      Modal,
      ModalHeader, 
      ModalBody, 
      ModalFooter ,
      Form,
      FormGroup,
      Label,
      Input
    } from 'reactstrap';
import { connect } from 'react-redux';


const ModalUser = (props)=> {
const [listInput,setListInput] = useState([props.dataEdit])
const [listEdit,setListEdit] = useState([])

   const toggle= ()=>{
       props.toggle()
      setListInput([{email:"",password:"",firstName:"",lastName:"",phonenumber:"",gender:"",address:""}])
    }
   
    const handleOnChaneInput =async (e)=>{
      
       const valueInput  = e.target.value
       const nameInput =e.target.name

       const dataValue=  {...listInput}
          dataValue[nameInput]= valueInput
           setListInput(
           dataValue
           )
           setListEdit(dataValue)
           
    }
    const CheckValideInput = () =>{
        let isValide = true
        const arrInput = ["email","password","firstName","lastName","phonenumber","address"]
        for(var i=0;i<arrInput.length;i++){
            if(!listInput[arrInput[i]]){
                isValide=false
                alert('no')
                break
            }
        }
        return isValide

    }
    
    const handleAddNewUser = () =>{
        const isValide = CheckValideInput()
        if(isValide){
            props.createNewUser(listInput)
            toggle()
            
        }
       

     
    }
 useEffect(()=>{

    EditUser()
    

 },[props.isOpen])
    
 const EditUser =() =>{
    const data = props.dataEdit
    setListInput({
        id:data.id,
        email:data.email,
        password:"123456",
        firstName:data.firstName,
        lastName:data.lastName,
        phonenumber:data.phonenumber,
        gender:data.gender,
        address:data.address
    })
   
 

  }
const saveEdit = () =>{
     props.editUserApi(listInput)
     const isValide = CheckValideInput()
     if(isValide){
        props.editUserApi(listInput)
         toggle()
         
     }
}

        return (
            <div className="text-center" >
                <Modal 
                isOpen={props.isOpen}
                 toggle={toggle}
                  size="lg"
                  >
                    <ModalHeader toggle={props.toggle}>
                        Form User
                        </ModalHeader>
                    <ModalBody>
                    <div className="container">
                    <Form >
                       {props.disable?( <FormGroup className='margin-t10'>
                        <Label className='margin-10' >Email</Label>
                        <Input 
                        type="email" 
                        name="email"
                          placeholder="Email..."
                            value={listInput.email||""}
                             onChange={(e)=>handleOnChaneInput(e)}
                             disabled
                             />
                        </FormGroup>):( <FormGroup className='margin-t10'>
                        <Label className='margin-10' >Email</Label>
                        <Input 
                        type="email" 
                        name="email"
                          placeholder="Email..."
                            value={listInput.email||""}
                             onChange={(e)=>handleOnChaneInput(e)}
                             
                             />
                        </FormGroup>)}
                       {props.disable?( <FormGroup className='margin-t10'>
                        <Label className='margin-10'>Password</Label>
                        <Input 
                        type="password"
                         name="password"
                         placeholder="Password..."
                         disabled
                        value={listInput.password||""} 
                        onChange={(e)=>handleOnChaneInput(e)}
                             />
                        </FormGroup>): (<FormGroup className='margin-t10'>
                        <Label className='margin-10'>Password</Label>
                        <Input 
                        type="password"
                         name="password"
                         placeholder="Password..."
                        value={listInput.password||""} 
                        onChange={(e)=>handleOnChaneInput(e)}
                             />
                        </FormGroup>)}
                        <FormGroup className='margin-t10'>
                        <Label className='margin-10'>Addres</Label>
                        <Input 
                        type="text" 
                        name="address"
                          placeholder="Addres..."
                            value={listInput.address||""}
                             onChange={(e)=>handleOnChaneInput(e)
                             } />
                        </FormGroup>
                        <FormGroup className='margin-t10'>
                        <Label className='margin-10'>First Name</Label>
                        <Input 
                        type="text" 
                        name="firstName"  
                        placeholder="First Name..." 
                        value={listInput.firstName||""} 
                        onChange={(e)=>handleOnChaneInput(e)}
                         />
                        </FormGroup>
                        <FormGroup className='margin-t10'>
                        <Label className='margin-10'>Last Name</Label>
                        <Input 
                        type="text" 
                        name="lastName"  
                        placeholder="Last Name..."  
                        value={listInput.lastName||""} 
                        onChange={(e)=>handleOnChaneInput(e)}
                         />
                        </FormGroup>
            
                        <FormGroup className='margin-t10'>
                        <Label className='margin-10'>Phone Number</Label>
                        <Input 
                        type="number" 
                        name="phonenumber"  
                        placeholder="phone number..."  
                        value={listInput.phonenumber||""} 
                        onChange={(e)=>handleOnChaneInput(e)}
                         />
                        </FormGroup>
                        </Form>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        {props.save?(<Button 
                        type='submit'  
                        color="primary" 
                        className='btn-modal' 
                        onClick={()=>saveEdit()  } >
                            Save changes
                         
                            </Button>):(<Button 
                        type='submit'  
                        color="primary" 
                        className='btn-modal' 
                        onClick={()=>handleAddNewUser()} >
                               Add New
                            </Button>)}
                        <Button 
                        color="danger"
                         className='btn-delete-size'
                          onClick={toggle} >
                              Cancel
                              </Button>{' '}
                    </ModalFooter>
            </Modal>

            </div>
        )
    }



const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
