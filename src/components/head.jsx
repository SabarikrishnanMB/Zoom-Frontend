import React from 'react';
import "../style/head.css";

export default function Head() {
  return (
   <div className='container'>
    <div className="textintro ">
    <h3>Introducing Zoom !</h3>
    <p>One solution for chats and channels, phone, whiteboard, meetings, and more..</p>
    </div>
    <div>
    <a class="ripple">
  <img
    alt="Zoom"
    className="introimg img-fluid"
    src="../zoom1.svg"
  />
</a>
    </div>
  
</div>
   
  );
}