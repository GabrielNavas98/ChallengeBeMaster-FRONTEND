import axios from "axios";
import { 
    GET_ALL_USER,
    GET_USER_ID,
    USER_DELETE,
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER, 
    USER_UPDATE
} from "./constants";
import SERVER from '../../server'

export const registerUser = (userInfo) => async(dispatch) => {
    try{
        const { data } = await axios.post(`${SERVER}/auth/register`, userInfo)
        dispatch({
            type: USER_REGISTER,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
};

export const userSignIn = (data) => async(dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN,
            payload: data
        })
    }catch (error) {
        console.log(error)
        } 
};

export const userLogout = () => (dispatch) => {
    dispatch({
      type: USER_LOGOUT,
    })
};

export const getAllUser = () => async (dispatch) => {
    try{
        const { data } = await axios.get(`${SERVER}/admin/users`);
        dispatch({
            type: GET_ALL_USER,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
};

export const getUserById = (id) => async (dispatch) => {
    try{
        const { data } = await axios.get(`${SERVER}/admin/${id}`);
        dispatch({
            type: GET_USER_ID,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
};

export const userUpdate = (id, updateInfo) => async (dispatch) => {
    try{
        const { data } = await axios.put(`${SERVER}/admin/${id}`, updateInfo)
        dispatch({
            type: USER_UPDATE
        })
    }catch(error){
        console.log(error)
    }
};

export const userDelete = (id) => async (dispatch) => {
    try{
        const { data } = await axios.delete(`${SERVER}/admin/${id}`)
        dispatch({
            type: USER_DELETE
        })
    }catch(error){
        console.log(error)
    }
}