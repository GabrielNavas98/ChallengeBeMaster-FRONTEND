import axios from "axios";

import { 
    CLEAN_DETAIL,
    GET_ALL_CONTENT, 
    GET_CONTENT_DETAIL,
    GET_UPCOMING
} from "./constants";

import SERVER from '../../server';

export const getAllContent = () => async (dispatch) => {
    try{
        const { data } = await axios.get(`${SERVER}/content`)
        dispatch({
            type: GET_ALL_CONTENT,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
};

export const getContentDetail = (id) => async (dispatch) => {
    try{
        const { data } = await axios.get(`${SERVER}/content/${id}`)
        dispatch({
            type: GET_CONTENT_DETAIL,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
};

export const cleanDetail = () => {
    return{
        type: CLEAN_DETAIL
    }
};

export const create = (content) => async () => {
    try{
        const { data } = await axios.post(`${SERVER}/content/create`, content)
    }catch(error){
        console.log(error)
    }
};

export const getUpComing = () => async (dispatch) => {
    try{
        const { data } = await axios.get(`${SERVER}/content/upcoming`)
        dispatch({
            type: GET_UPCOMING,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
};