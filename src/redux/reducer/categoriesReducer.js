import {
    GET_CATEGORIES
} from '../actions/constants';

const initialState = {
    categories: []
};

export const categoriesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
};