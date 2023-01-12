import React from 'react'
import "../style/profile.css";
import { config } from "../config.js";
import { MDBInput } from "mdb-react-ui-kit";
import Navpro from './navpro.jsx';
import { useState, useEffect} from "react";
import axios from "axios";
import {useParams } from "react-router-dom";


export default function Profile() {

    const [users, setUser]= useState([]);
    let fetchData = async () => {
   try {
    let res = await axios.get(`${config.api}/user/${params.id}`, {
      headers: {
        Authorization: `${localStorage.getItem("react_app_token")}`,
      },
    });
    console.log(params.id)
    setUser(res.data);
  } catch (error) {
    console.log(error);
  }
};
let params= useParams();
useEffect(() => {
  fetchData();
  }, []);


  return (
    <>
    <Navpro/>
<div className="container">
<div>
    <i class="fa-solid fa-user fa-8x"></i>
    
    </div>
        <form>
        <h3 className="p-3 text-center">Profile</h3>
        {users.map((user, index) => {
           return (
          <div className="form-outline mb-4">
            <MDBInput
              type="emai"
              Name="email"
              label="Email address"
              value={user.email}
            />
             </div>
           )
        })
    }  
          
        </form>
      </div>
    </>
  )
}

