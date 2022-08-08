import { 
    GET_ALL_USER, 
    GET_USER_ID, 
    USER_LOGIN, 
    USER_LOGOUT, 
} from "../actions/constants";

const initialState ={
    userInfo: {},
    allUsers: [],
    userDetail: {}
}

export const userReducer = (state= initialState, action) => {
    switch(action.type){
        case USER_LOGIN:
            return{
                ...state,
                userInfo: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                userInfo:{},
                allUsers: [],
                userDetail: {}
            }
        case GET_ALL_USER:
            return{
                ...state,
                allUsers: action.payload
            }
        case GET_USER_ID:
            return{
                ...state,
                userDetail: action.payload
            }
        default:
            return state;
    }
}