import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/actions/users";
import CardUser from "../CardUser/CardUser";
import Navbar from "../../Navbar/Navbar";
import style from './Users.module.css';

const Users = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users.allUsers);

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch]);

    return(
        <div>
            <Navbar/>
            <div className={style.admin_dash}>
                {
                allUsers?.length !== 0 ? 
                    allUsers?.map(user => {
                    return(
                        <CardUser
                        id={user.id}
                        key={user.id}
                        user_name={user.user_name}
                        isAdmin={user.isAdmin}
                        user_email={user.user_email}
                        />
                        )
                    }): null
                }
            </div>
        </div>
    )
};

export default Users;