import React, { useEffect, useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css"
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import { getAllContent } from "../../redux/actions/content";

export default function Home(){

    const dispatch = useDispatch();
    const allContent = useSelector((state) => state.content.content);

    const [currentPg, setCurrentPg] = useState(1); //setea la pagina en 1
    const [contentPerPg, setcontentPerPg] = useState(8);

    const lastContent = currentPg * contentPerPg;
    const firstContent = lastContent - contentPerPg;
    const currentContent = allContent.slice(firstContent, lastContent);

    const paginado = (pgNumber) => {
        setCurrentPg(pgNumber)
    };

    useEffect( ()=> {
        dispatch(getAllContent());
    }, [dispatch]);
    
    return(
        <div className={style.box}>
            <Navbar/>
            <div className={style.box_title}>
                <h2>Most Popular Movies</h2>
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
                    allContent={allContent.length}
                    paginado={paginado}
                    currentPg={currentPg}
                    setCurrentPg={setCurrentPg}
                />
        </div>
    )
}