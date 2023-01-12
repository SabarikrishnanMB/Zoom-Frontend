import React from "react";
import "../style/signup.css";
import Navbar from './navbar.jsx';
import { config } from "../config.js";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import {MDBInput,} from "mdb-react-ui-kit";
import axios from "axios";


// <----------formik validate---------->
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length <= 3) {
    errors.firstName = "Must be 4 characters or greater";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length >= 20) {
    errors.lastName = "Below 20 Characters";
  }

  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};

export default function Signup() {
  
  let navigation = useNavigate();
  // <------formik values---------->
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
  // <---------Axios--API--Method---------->
  onSubmit: async (values) => {
    try {
      const register = await axios.post(`${config.api}/signup`, values);
       alert(register.data.message);
        navigation("/signin");
    } catch (error) {
    }
},
});
  return (
    <>
    <Navbar/>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="p-3 text-center">Sign Up</h3>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
              <MDBInput
              id="firstName"
                Name="firstName"
                label="First name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />{formik.errors.firstName ? <div style={{ color: "red" }}>{formik.errors.firstName}</div> : null}
                
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
              
              <MDBInput
              id="lastName"
                Name="lastName"
                label="Last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />{formik.errors.lastName ? <div style={{ color: "red" }}>{formik.errors.lastName}</div> : null}
              </div>
            </div>
          </div>
          <div className="form-outline mb-4">
          <MDBInput
          id="email"
            Name="email"
            type="email"
            label="Email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
          </div>
          <div className="form-outline mb-4">
          <MDBInput
            Name="password"
            type="password"
            label="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          </div>
          <button  type="submit"
            value="Submit" className="register btn btn-success btn-block mb-4">
            Register
          </button>
          <div className="text-center">
            <p>
              Already have account? <Link to="/signin">Login</Link>
            </p>
          </div>
        </form>
        <div>
          <img alt="Zoom" className="introimg img-fluid" src="../signup.svg" />
        </div>
      </div>
    </>
  );
}
