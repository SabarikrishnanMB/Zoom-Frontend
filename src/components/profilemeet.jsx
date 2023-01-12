import React from 'react'
import "../style/profilemeet.css";
import Navpro from './navpro.jsx';

export default function Profilemeet() {
  const current = new Date();
  const date = `${current.getFullYear() }`;
  return (
    <>
    <Navpro/>
    <div className='container'>
    <section className='meeticon'>
    <div className='meeticon1'>
    <i class="fa-solid fa-video-slash fa-4x"></i>
    <h6>New Meeting</h6>
    </div>
    <div className='meeticon1'>
    <i class="fa-solid fa-square-plus fa-4x"></i>
    <h6>Join</h6>
    </div>
    <div className='meeticon1'>
    <i class="fa-solid fa-calendar fa-4x"></i>
    <h6>Schedule</h6>
    </div>
    <div className='meeticon1'>
    <i class="fa-solid fa-square-arrow-up-right fa-4x"></i>
    <h6>Share Screen</h6>
    </div>
    </section>
    <div class="card">
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
  <div class="card-img-overlay">
    <h5 class="card-title">{date}</h5>
  </div>
  <div class="card-body">
    <p class="card-text">No upcoming meetings today.</p>
  </div>
</div>
</div>
    </>
    
  )
}
