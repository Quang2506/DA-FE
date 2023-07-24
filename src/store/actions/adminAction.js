import actionTypes from './actionTypes';
import {
    getAllCodes,
    createUser,
    getAllUser,
    deleteUser,
    editUser
} from '../../services/user_services'

import { 
    getTopDoctor ,
    getAllDoctor,
    postInfDoctor,
    getDoctorDetailById,
    updateDetailMarkdownApi

} from '../../services/doctor_services';







export const fetchGenderStart = () => {
  
   return async (dispatch,getState)=>{
    try{
         dispatch({type:actionTypes.ADD_GENDER_START})
        let res = await getAllCodes("GENDER");
        if(res ){
          
            dispatch(fetchGenderSuccess(res.data))
        }else{
            dispatch(fetchGenderFaided())
        }

    }catch(e){
        console.log(e)
        dispatch(fetchGenderFaided())
    }
}
} 
export const fetchGenderSuccess = (data) => ({
    type: actionTypes.ADD_GENDER_SUCCESS,
    data:data
})  
export const fetchGenderFaided= () => ({
    type: actionTypes.ADD_GENDER_FAiDED
})  
export const fetchPositionStart = ()=>{
    return async (dispatch,getState)=>{
        try{
            dispatch({
                type:actionTypes.ADD_GENDER_START

            })

            const  res = await getAllCodes("POSITION")
            if(res.data){
               dispatch(fetchPositionSuccess(res.data))
            }else{
             dispatch(fetchPositionFaided())
            }
        }catch(e){
            console.log(e)
            dispatch(fetchPositionFaided())
        }
    }
}

export const fetchPositionSuccess = (data)=>({
type:actionTypes.ADD_POSITION_SUCCESS,
data:data
})

export const fetchPositionFaided = ()=>({
    type:actionTypes.ADD_POSITION_FAiDED
})
export const fetchRoleStart = () =>{
    return async (dispatch,getState)=>{
        try{
            dispatch({
                type:actionTypes.ADD_ROLE_START
            })
            const res = await getAllCodes("ROLE")
            if(res.data){
                dispatch(fetchRoleSuccess(res.data))
            }else{
                dispatch(fetchRoleFaided())
            }

        }catch(e){
            dispatch(fetchPositionFaided())
            console.log(e)
        }
    }
}
export const fetchTimeAllCode = () =>{
    return async (dispatch,getState) =>{
        try{
            let res = await getAllCodes("TIME")
            return res
        }catch(e){
            console.log(e)
        }
    }
}

export const fetchRoleSuccess = (data) =>({
  type:actionTypes.ADD_ROLE_SUCCESS,
  data:data
})
export const fetchRoleFaided=()=>({
    type:actionTypes.ADD_ROLE_FAiDED
})

export const fetchPriceAllCode = ()=>{
    return async(dispatch,getState) =>{
        try{
            let res = await getAllCodes("PRICE")
            
            if(res){
                dispatch({
                    type:actionTypes.GET_PRICE_ALLCODES,
                    data:res.data
                })
            }
        }catch(e){
            console.log(e)
        }
    }
}

export const createNewUser = (data)=>{
   return async (dispatch,getState) =>{
    try{

        let res = await createUser(data);
      
        if(res && res.errCode===0){
            dispatch(saveUserSuccess())
            dispatch(fetchAllUserStart())
         
           
        }else{
            dispatch(saveUserfaile())
            console.log('s')
        }
    }catch(e){
        dispatch(saveUserfaile())
        console.log(e)
       
    }
   }
}

export const  saveUserSuccess =()=>({
type:actionTypes.CREATE_USER_SUCCESS,
})
export const  saveUserfaile =()=>({
    type:actionTypes.CREATE_USER_FAiDED,
    })

export const fetchAllUserStart = () =>{
    return async (dispatch,getState)=>{
        try{
          
            let res = await  getAllUser('ALL')
            if(res){
              
               dispatch(fetchAllUserSuccess(res.user.reverse()))
            }else{
              dispatch(fetchAllUserFaided())
            }
        }catch(e){
            dispatch(fetchAllUserFaided())
          console.log(e)}
    }
}

export const fetchAllUserSuccess = (data) =>({
    type:actionTypes.FETCH_ALL_USER_SUCCESS,
    data:data
})
export const fetchAllUserFaided = ()=>({
    type:actionTypes.FETCH_ALL_USER_FAIL,
})
export const deleteUserRedux = (data)=>{
    return async (dispatch,getState)=>{
        
            try{
                
                const res = await deleteUser(data.id)
               
                if(res.data.errCode===0){
                    dispatch(fetchAllUserStart())
                    
                  
                }
            }catch(e){
                console.log(e)
            }
    }

}
export const deleteUserSuccess = ()=>({
    type:actionTypes.DELETE_USER_SUCCESS,
    
})
export const updateUserRedux = (data)=>{
    return async (dispatch,getState)=>{
        try{
            const res = await editUser(data)
            
            if(res&&res.data.errCode===0){
                dispatch(fetchAllUserStart())
                dispatch(updateUserSuccess())
            
            }

        }catch(e){
            console.log(e)
        }
    }
} 
export const updateUserSuccess = ()=>({
    type:actionTypes.UPDATE_USER_SUCCESS
})

export const fetchTopDoctor = () =>{
    return async(dispatch,getState)=>{
        try{
            let res = await getTopDoctor(10)
            let data = res.data
          
            if(data&&res.errorCode===0){
                dispatch(fetchTopDoctorSuccess(data))
            
            }else{
                dispatch(fetchTopDoctorfaided())
            }
        }catch(e){
            console.log(e)
        }

    }
}
export const fetchTopDoctorSuccess=(data)=>({
    type:actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
    data:data
})
export const fetchTopDoctorfaided=()=>({
    type:actionTypes.FETCH_TOP_DOCTOR_FAIDED
    
})
export const fetchAllDoctorStart =()=>{

return async (dispatch,getState)=>{
  
    try{ 
        let res=  await getAllDoctor()
       if(res.resData.data){
      
        dispatch(fetchAllDoctorSuccess(res.resData.data))
       }
       //
    }catch(e){
console.log(e)
    }
}
}
export const fetchAllDoctorSuccess = (data)=>({
    type:actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
    data:data
})
export const saveInfDoctor = (data)=>{
    return async (dispatch,getState)=>{
        try{
           
            let datares= await postInfDoctor(data)
            return datares
         
           
        }catch(e){
            console.log(e)
        }
    }
}

export const getDetailDoctor = (id) =>{
    return async (dispatch,getState)=>{
        try{
            let dataDoctor = await getDoctorDetailById(id)

            if(dataDoctor){
                
                dispatch(getDataDetailDoctorSuccess(dataDoctor.data))
            }
        }catch(e){
            console.log(e)
        }
    }
}
export const getDataDetailDoctorSuccess = (data) =>({
    type:actionTypes.GET_DETAIL_DOCTOR_BY_ID,
    data:data
})
export const updateDetailMarkdown = (data)=>{
    return async (dispatch,getState)=>{
        try{
            let respons = await updateDetailMarkdownApi(data)
            if(respons){
                return respons
          
            }
        }catch(e){
            console.log(e)
        }
    }
}
