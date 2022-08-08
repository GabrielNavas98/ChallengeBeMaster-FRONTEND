import axios from "axios";
import {
    GET_CATEGORIES
} from "./constants";

import SERVER from '../../server';

export const getAllCategories = () => async (dispatch) => {
    try{
        const { data } = await axios.get(`${SERVER}/categories`);
        dispatch({
            type: GET_CATEGORIES,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
};