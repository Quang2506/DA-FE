import actionTypes from './actionTypes';
import {getAllCodes,createUser,getAllUser,deleteUser} from '../../services/user_services'




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

export const fetchRoleSuccess = (data) =>({
  type:actionTypes.ADD_ROLE_SUCCESS,
  data:data
})
export const fetchRoleFaided=()=>({
    type:actionTypes.ADD_ROLE_FAiDED
})

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