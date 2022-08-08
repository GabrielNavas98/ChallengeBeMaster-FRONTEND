import {
    GET_ALL_CONTENT,
    GET_CONTENT_DETAIL,
    CLEAN_DETAIL,
    GET_UPCOMING
} from "../actions/constants";


const initialState ={
    content: [],
    contentDetail: {},
    upComing: []
}

export const contentReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_ALL_CONTENT:
            return{
                ...state,
                content: action.payload
            }
        case GET_CONTENT_DETAIL:
            return{
                ...state,
                contentDetail: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                contentDetail: {}
            }
        case GET_UPCOMING:
            return{
                ...state,
                upComing: action.payload
            }
        default:
            return state;
    }
}