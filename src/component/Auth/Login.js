import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from  '../context/auth'



const Login = () => {

  const initalValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initalValues);
  const [formErrors, setformErrors] = useState({});
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    if (formValues.username !== '' && formValues.password !== '') {
      try {
        const res = await axios.post('/auth/login', formValues);
        if (res && res.status) {
          toast.success("Login Succesfull.");
          setAuth({
            ...auth,
            user: res.data,
            token: res.data.token
          });
          localStorage.setItem('auth', JSON.stringify(res.data));
          navigate(location.state || '/');
        } else {
          toast.error(res.data.msg);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
  }

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username field is required!";
    }
    if (!values.password) {
      errors.password = "Password field is required!";
    }
    return errors;
  }


  return (
    <Layout title="E-shop Cart Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername1"
            placeholder="Enter Username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <p style={{ color: 'red' }}>{formErrors.username}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <p style={{ color: 'red' }}>{formErrors.password}</p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Login;
