import actionTypes from '../actions/actionTypes';


const initialState = {
    isLoadingGender:false,
    genders:[],
    roles:[],
    positions:[],
    isCreateUser:false
}

const adminReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case actionTypes.ADD_GENDER_START:
           
          
          state.initialState=true
            return {
                ...state,
            }
    
        case actionTypes.ADD_GENDER_SUCCESS:
     
             const newState = {...state}
             newState.genders = action.data;
             newState.isLoadingGender=true
           
            return {
                ...newState,
              
            }
        case actionTypes.ADD_GENDER_FAiDED:
            state.initialState=false
            return {
                ...state,
              
            }
        case actionTypes.ADD_POSITION_START:
            return{
                ...state
            }
        case actionTypes.ADD_POSITION_SUCCESS:
          
            const statePosition ={...state}
            statePosition.positions=action.data
            return{...statePosition}
        case actionTypes.ADD_GENDER_FAiDED:
            return{...state}
        case actionTypes.ADD_ROLE_START:
            return{
                ...state
            }
        case actionTypes.ADD_ROLE_SUCCESS:
            
            const stateRole= {...state}
          
            stateRole.roles=action.data
            return{...stateRole}
        case actionTypes.ADD_ROLE_FAiDED:
            return{
                ...state
            }
            case actionTypes.FETCH_ALL_USER_SUCCESS:
                state.dataUser = []
                const stateDataUser = {...state}
                stateDataUser.dataUser = action.data
               
                
                return {
                    ...stateDataUser,
                    
                }

            case actionTypes.CREATE_USER_SUCCESS:
            state.isCreateUser=true
            return {...state}
            case actionTypes.CREATE_USER_FAiDED:
            state.isCreateUser=false
            return{...state}
        default:
            return state;
    }
}

export default adminReducer;