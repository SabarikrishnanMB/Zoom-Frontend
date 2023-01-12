import React from 'react';
import "../style/circle.css";

export default function Circle() {
  return (
   <div className='container' id="circle">
    <div>
  <img
    alt="Zoom"
    className="circleimg img-fluid"
    src="../zoom circle.svg"
  />
</div>
    <div className="circletext m-5">
    <h3>Zoom For You.</h3>
    <p>We're here to help you connect, communicate,</p>
    <p>AND express your ideas so you can get more done together</p>
    <p>We're proud to be trusted by millions of enterprises</p>
</div>
</div>
   
  );
}