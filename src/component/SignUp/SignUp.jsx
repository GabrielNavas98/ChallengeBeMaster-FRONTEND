import React, { useState } from 'react';
import style from './signUp.module.css'
import { registerUser } from '../../redux/actions/users';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import activeValidations from './Validators/activeValidation';
import submitValidations from './Validators/submitValidation';

export default function SignUp () {

  const dispach = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    setErrors(
      activeValidations({
        ...user,
        [e.target.name]: e.target.value
      })
    )
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(submitValidations(user));
    if (Object.keys(errors).length === 0 && user.user_name !== "" && user.user_email !== "" && user.password !== "") {
      dispach(registerUser(user));
      navigate("/signin",{replace:true});
    }
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>User Name</label>
          <input
            name='user_name'
            type="text"
            className="form-control"
            placeholder="User Name"
            onChange={handleChange}
          />
          {errors.user_name && <p class="text-danger">{errors.user_name}</p>}
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            name='user_email'
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
          />
          {errors.user_email && <p class="text-danger">{errors.user_email}</p>}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            name='password'
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
          {errors.password && (<p class="text-danger">{errors.password}</p>)}
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
              Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/SignIn">sign in?</a>
        </p>
      </form>
    </div>
  )
}