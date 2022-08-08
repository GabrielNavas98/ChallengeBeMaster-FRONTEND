import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";

const Card = ({title, poster, released, id}) => {
    
    return(
        <div className={style.card}>
        <div className={style.card_img}>
            <img src={poster} alt="" /> 
            <ul className={style.card_icon}>
                <li>
                    <span>View Details</span>
                    <Link to={`/home/${id}`}>
                        <button className={style.btnIcon}>                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                            </svg>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={style.card_data}>
            <h1 className={style.card_title}>{title}</h1>
            <span className={style.card_preci}>{released}</span>
        </div>
    </div>
    )
};

export default Card;