import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from './Error404.module.css';

export default function Error404(){
    const navigate = useNavigate()
    const handleBack = (e) => {
        e.preventDefault()
        navigate(-1);
    }
    return (
        <div className={style.container}>
            <h1>404 NOT FOUND</h1>
                <button className={style.btn_land} onClick={handleBack}>Home</button>
        </div>
)
}