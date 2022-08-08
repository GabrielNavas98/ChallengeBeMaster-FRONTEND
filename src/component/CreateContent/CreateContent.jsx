import React, { useEffect, useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from 'react-router-dom';
import style from "./Create.module.css";
import { getAllCategories } from "../../redux/actions/categories";
import { create } from "../../redux/actions/content";

const CreateContent = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const allCategories = useSelector((state) => state.categories.categories);
    const [content, setContent] = useState({
        title: "",
        description: "",
        rating: "",
        poster: "",
        release: "",
        categories: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(create(content));
        navigate("/home",{replace:true});        
    };

    const handleChange = (e) => {
        e.preventDefault();
        setContent({
            ...content,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectcategory = (e) => {
        e.preventDefault();
        if(content.categories.includes(e.target.value)){ 
            let filter = content.categories.filter(cat => cat !== e.target.value)
            setContent({
                ...content,
                categories: filter
            })
        }else if(!content.categories.includes(e.target.value)){
            setContent({
                ...content,
                categories: [...content.categories, e.target.value]
            })
        }
    };
    

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    return(
        <div className={style.container}>
            <div className={style.box}>
                <div>
                    <div className={style.preview_img}>
                        <img src={content.poster || "https://www.reelviews.net/resources/img/default_poster.jpg"} alt="" />
                    </div>
                    <div>
                        <select class="form-select" onChange={handleSelectcategory}>
                            {
                                allCategories ?
                                allCategories.map(category =>{
                                    return(
                                        <option key={category.name}>{category.name}</option>
                                    )
                                }):
                                    null
                                }
                        </select>
                    </div>
                    <div>
                        {
                            content.categories ?
                                content.categories.map(category =>{
                                    return(
                                        <div key={category}>
                                            <label>{category}</label>
                                        </div>
                                    )
                                }): null
                        }
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={style.form_box}>
                    <h3>Create Content</h3>
                    <div className="mb-3">
                        <label>Title</label>
                        <input
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Release</label>
                        <input
                            name="release"
                            type="date"
                            className="form-control"
                            placeholder="Enter Release"
                            onChange={handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label>Rating</label>
                        <input
                            name="rating"
                            type="number"
                            className="form-control"
                            placeholder="Enter rating"
                            onChange={handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label>Poster</label>
                        <input
                            name="poster"
                            type="text"
                            className="form-control"
                            placeholder="Poster URL"
                            onChange={handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label>Description</label>
                        <textarea
                            class="form-control"
                            name="description"
                            rows="3"
                            onChange={handleChange}
                            ></textarea>
                    </div>
                    <div className={style.btn_box}>
                        <button type="submit" className="btn btn-primary" disabled={!content.title || !content.description}>
                            Create
                        </button>
                        <NavLink to='/home'>
                            <button type="submit" className="btn btn-primary">Back</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CreateContent;