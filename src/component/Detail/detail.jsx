import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { cleanDetail, getContentDetail } from "../../redux/actions/content";
import style from './detail.module.css';

const Detail = () => {
    
    const { id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const detailContent = useSelector((state) => state.content.contentDetail);
    const handleBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        dispatch(getContentDetail(id));
        return ()=>{dispatch(cleanDetail())}
    },[dispatch])
    
    return(
        <div>
            {
                detailContent ?
                <div className={style.detail} key={detailContent.id}>
                    <div className={style.card}  key={detailContent.id}>
                        <div className={style.detail_img}>
                            <img src={detailContent.poster} alt="img not found"/>
                        </div>
                        <div className={style.info}>
                            <h3>{detailContent.title}</h3>
                            <h6>Released:    {detailContent.release}</h6>
                            <h6>Rating:   {detailContent.rating}</h6>
                            {
                                detailContent.categories ?
                                <div>
                                    <ul className={style.list_categories}>
                                        Categories: 
                                            {detailContent.categories.map(cat => {
                                                return (
                                                    <li key={cat.name}>{cat.name}</li>
                                                )
                                            })}
                                    </ul>
                                </div> 
                                :
                                <h4>Loading..</h4>
                            }
                            <p>{detailContent.description}</p>
                        </div>
                        <div className={style.btn_box}>
                            {/* <NavLink to='/home'> */}
                                <button className={style.btn_back} onClick={handleBack}>Back</button>
                            {/* </NavLink> */}
                        </div>
                    </div>
                </div> : 
                null               
            }
        </div> 
    )
};

export default Detail;