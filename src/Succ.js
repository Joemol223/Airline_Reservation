import React from 'react'
import {Link} from 'react-router-dom'
import './Succ.css'

function Succ() {
    return (
        <div>
                      <nav class="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
         <img className="logo1"src="logo1.png" alt="logo" />
      </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link className="ppl"  to="/Flight">Flight Schedule <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link className="ppl"  to="/Booking">Ticket Booking</Link>
      </li>
      <li class="nav-item active">
        <Link className="ppl"  to="/Cancel">Ticket Cancellation</Link>
      </li>
      <li class="nav-item active">
        <Link className="ppl"  to="/Contact">Contact Us</Link>
      </li>
      </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item7 active">
        <Link className="ppl" to="/">Logout</Link>
      </li>
    </ul>
  </div>
</nav>
<div className="rp">
  <p>Found your suitable flight?<br/>Then hurry up to grab your seats at lowest prices </p>
<Link to="/Booking"> <button className="btnl">Book</button></Link>
<hr/>
<p>For your ticket cancellation process. Click the below button</p>
<Link to="/Cancel"> <button className="btnl">Cancel</button></Link>
<hr/>
  <p>Any qurries?<br/> Want to contact us? <br/>Then click the below button </p>
<Link to="/Contact"> <button className="btnl">Contact</button></Link>
</div>
<div className="suc">
    <img src="tick.png" alt="tick" />
<h3>Payment Successfully!!</h3>
<h5>You have successfully done your payment and booked your tickets</h5>
</div>

            
        </div>
    )
}

export default Succ
