import React from 'react'
import "../style/navpro.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navpro() {
  let navigation = useNavigate();


  let doLogout = () => {
    localStorage.removeItem("react_app_token");
    navigation("/")
  }
  return (
    <>
    <section className='navbarpro'>
    <Link to="/profilemeet" style={{ color: "white" }}><div className='icons'>
    <i class="fa-solid fa-house-chimney-user "></i>
    <h6 className='home'>Home</h6>
    </div></Link>
    <Link to="/profile" style={{ color: "white" }} ><div className='icons'>
    <i class="fa-solid fa-user"></i>
    <h6 className='profile'>Profile</h6>
    </div></Link>
    <div className='icons' onClick={doLogout} >
    <i class="fa-solid fa-right-from-bracket"></i>
    <h6 className='logout' onClick={doLogout}>Logout</h6>
    </div>
    </section>
    
    
    </>
    
  )
}

