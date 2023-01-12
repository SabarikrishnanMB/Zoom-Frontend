import React from "react";
import "../style/signin.css";
import Navbar from "./navbar.jsx";
import { config } from "../config.js";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom"; */

//<----------- Formik validation------------>
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};

export default function Signin() {
  let navigation = useNavigate();
  //<----------- Formik values------------>
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate,
    // <-------------Axios-------------->
    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${config.api}/login`, values);
        localStorage.setItem("react_app_token", login.data.token);
        alert(login.data.message);
        navigation("/profilemeet");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <img alt="Zoom" className="introimg img-fluid" src="../signin.svg" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <h3 className="p-3 text-center">Sign In</h3>
          <div className="form-outline mb-4">
            <MDBInput
              type="email"
              Name="email"
              label="Email address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-outline mb-4">
            <MDBInput
              type="password"
              label="Password"
              Name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <button
            type="submit"
            className="login btn btn-success btn-block mb-4"
          >
            Login
          </button>
          <div className="text-center">
            Not a member? <Link to="/signup">Register Your Account</Link>
          </div>
        </form>
        <div className="text-center">
          <strong>For Testing</strong>
          <br />
          <h6>Email: test@gmail.com</h6>
          <h6>Password: test@123</h6>
        </div>
      </div>
    </>
  );
}
