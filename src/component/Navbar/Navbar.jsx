import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate} from "react-router-dom";
import { userLogout } from "../../redux/actions/users";
import style from './Navbar.module.css';

const Navbar = () => {
    
    const user = useSelector((state)=>state.users.userInfo)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(userLogout());
        navigate("/",{replace:true})
    };

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">BeMasterApp</a>
                {
                    Object.keys(user).length > 0 ?
                        <div className={style.drop}>
                            <button className={style.perfil} type="button" data-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#F66B0E" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            <h3 className={style.userName}>{user.user_name}</h3>
                            </button> 
                            <ul className="dropdown-menu">
                                <li>
                                    <button className={style.mybtn} onClick={handleLogout}>Log Out</button>
                                </li>
                                {!window.location.href.includes("/home") ?
                                            <li>
                                                <NavLink to="/home">
                                                    <button className={style.mybtn}>Home</button>
                                                </NavLink>
                                            </li> : <li></li>
                                }
                                {
                                    user && user.isAdmin && !window.location.href.includes("/admin") ?
                                        <li>
                                            <NavLink to="/admin/user">
                                                <button className={style.mybtn}>Admin</button>
                                            </NavLink>
                                        </li> : 
                                        <li></li>
                                }
                                {
                                    user && user.isAdmin && !window.location.href.includes("/upComingMovies") ?
                                        <li>
                                            <NavLink to="/upComingMovies">
                                                <button className={style.mybtn}>UpComing Movies</button>
                                            </NavLink>
                                        </li> : 
                                        <li></li>
                                }
                            </ul>
                        </div>
                        : null
                }
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                </button>
            </div>
        </nav>
    )
};

export default Navbar;