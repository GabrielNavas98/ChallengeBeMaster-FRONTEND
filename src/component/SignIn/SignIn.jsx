import React, { useState } from "react";
import style from "./SignIn.module.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { toast } from 'react-toastify';
import SERVER from "../../server";
import { userSignIn } from "../../redux/actions/users";

export default function SignIn (){
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [user, setUser] = useState({
    user_email: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.keys(user).length === 2 && user.user_email !== "" && user.password !== ""){
      let response = null
      try{
        response = await fetch(`${SERVER}/auth/login`,
        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        })
        const result = await response.json()
        if(result){
          if(result.msg === 'Welcome'){
            dispatch(userSignIn(result.info))
            setUser({
              user_email: "",
              password: ""
            })
            alert(`${result.msg}`)
            navigate("/home",{replace:true})
          }else{
          alert(`${result.msg}`)
          }
        }
      }catch(error){
        console.log(error)
      }
    }else{
    }
  }

  return(
      <div className={style.container}>
          <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              name="user_email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
              />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
            <p className="forgot-password text-right">
            New in BeMaster? <a href="/signUp">Sign Up</a>
          </p>
          </div>
        </form>
      </div>
    )
}