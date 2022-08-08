import React, { useEffect, useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./UpComing.module.css"
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import { getUpComing } from "../../redux/actions/content";

export default function UpComing(){

    const dispatch = useDispatch();
    const upComingMovies = useSelector((state) => state.content.upComing);

    const [currentPg, setCurrentPg] = useState(1); //setea la pagina en 1
    const [contentPerPg, setcontentPerPg] = useState(8);

    const lastContent = currentPg * contentPerPg;
    const firstContent = lastContent - contentPerPg;
    const currentContent = upComingMovies.slice(firstContent, lastContent);

    const paginado = (pgNumber) => {
        setCurrentPg(pgNumber)
    };

    useEffect( ()=> {
        dispatch(getUpComing());
    }, [dispatch]);
    
    return(
        <div className={style.box}>
            <Navbar/>
            <div className={style.box_title}>
                <h2>UpComing Movies</h2>
            </div>
            <div className={style.home_container}>
                {
                    currentContent ?
                    currentContent.map(content => {
                            return(
                                <Card
                                    key={content.id}
                                    id={content.id}
                                    title={content.title}
                                    released={content.released}
                                    poster={content.poster}
                                />
                            )
                        }):
                        null
                }
            </div>
            <Paginated
                    contentPerPg={contentPerPg}
                    allContent={upComingMovies.length}
                    paginado={paginado}
                    currentPg={currentPg}
                    setCurrentPg={setCurrentPg}
                />
        </div>
    )
}