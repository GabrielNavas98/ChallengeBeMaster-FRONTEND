import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { getUserById, userUpdate } from "../../../redux/actions/users";
import style from "./EditUser.module.css";

const EditUser = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetail = useSelector((state) => state.users.userDetail);
    const [update, setUpdate] = useState({
        user_name: "",
        user_email: "",
        isAdmin: userDetail.isAdmin
    })

    const handleChange = (e) => {
        e.preventDefault();
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userUpdate(id, update));
        navigate('/admin/user',{replace:true})
    };

    const handleSwitch = (e) => {
        e.preventDefault();
        setUpdate({
            ...update,
            isAdmin: e.target.value
        })
    }

    useEffect(() => {
        dispatch(getUserById(id));
    }, [dispatch])

    return(
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form_box}>
                <h3>Edit User</h3>
                <div className="mb-3">
                    <label>UserName:  {userDetail.user_name}</label>                    <input
                        name="user_name"
                        type="text"
                        className="form-control"
                        placeholder="UserName"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Email:  {userDetail.user_email}</label>
                    <input
                        name="user_email"
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={handleChange}
                    />
                </div>
                    <label>User Admin: {userDetail.isAdmin.toString()}</label>
                    <div>
                        <select class="form-select" name="isAdmin" onChange={handleSwitch}>
                            <option defaultValue>default</option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                        </select>                
                    </div>
                <div className={style.btn_box}>
                    <button type="submit" className="btn btn-primary" disabled={!update.user_email || !update.user_name}>
                        Change
                    </button>
                    <NavLink to='/admin/user'>
                        <button type="submit" className="btn btn-primary">
                            Back
                        </button>
                    </NavLink>
                </div>
            </form>
        </div>
    )
};

export default EditUser;