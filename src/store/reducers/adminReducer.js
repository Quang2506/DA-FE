import actionTypes from '../actions/actionTypes';

const initialState = {
    genders:[],
    roles:[],
    positions:[]
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_GENDER_START:
            console.log('check action start....',action)
            return {
                ...state,
            }
    
        case actionTypes.ADD_GENDER_SUCCESS:
            console.log('check action success....',action)
            return {
                ...state,
              
            }
        case actionTypes.ADD_GENDER_FAiDED:
            console.log('check action faild....',action)
            return {
                ...state,
              
            }
        default:
            return state;
    }
}

export default adminReducer;