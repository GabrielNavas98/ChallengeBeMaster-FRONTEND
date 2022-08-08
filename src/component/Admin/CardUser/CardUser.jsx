import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUser, userDelete } from "../../../redux/actions/users";
import style from "./CardUser.module.css";

const CardUser = ({id, user_name, isAdmin, user_email}) => {

    const dispatch = useDispatch()
    const handleDeleteUser = () => {
        dispatch(userDelete(id))
        .then(r => {
            dispatch(getAllUser())
        })
    };
    return(
        <div className={style.card_user}>
            <div className={style.card_img}>
                <img src="https://img.freepik.com/vector-premium/icono-plano-usuario-anonimo-ilustracion-vector-larga-sombra_520826-1932.jpg" alt="" /> 
                    {
                        !isAdmin &&
                            <ul className={style.card_icon}>
                                <li>
                                    <button className={style.btnIcon} onClick={handleDeleteUser}>                        
                                        <span>Delete</span>
                                    </button>
                                </li>
                                <li>
                                    <Link to={`/admin/user/${id}`}>
                                    <button className={style.btnIcon}>
                                        <span>Edit</span>
                                    </button>
                                    </Link>
                                </li>
                            </ul>
                    }
            </div>
            <div className={style.user_data}>
                <h1 className={style.user_name}>User: {user_name}</h1>
                <span className={style.email}>{user_email}</span>
                <br />
                {
                    isAdmin?
                    <span className={style.isAdmin}>Admin</span>
                    :
                    <span className={style.noAdmin}>NoAdmin</span>
                }
            </div>
    </div>
    )
};

export default CardUser;