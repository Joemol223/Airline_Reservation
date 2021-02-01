import React from 'react'
import {Link} from "react-router-dom";
import './Home.css';
function Home() {
    return (
        <>
             <nav class="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
         <img className="logo1"src="logo1.png" alt="logo" />
      </Link>

      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" id="qqt">
      <li className="nav-item"  >
        <Link className="ppl1" to="/Login" style={{float:"right"}}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="ppl1" style={{float:"right"}} to="/Register">Register</Link>
      </li>
    </ul>
 
  </div>
</nav>
           
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Welcome to OneTravel</h1>
    <p class="lead" style={{alignText:"center"}}> The best place to book all your domestic and international flight tickets at afforable price & in simple steps.</p>
    <img src="flight1.png" alt="flight_reservation" className="imghm" />
    <img src="domestic_flight.png" alt="domestic_flight" className="imghm" />
    <img src="international_flight.png" alt="international_flight" className="imghm" />
    <img src="flight2.png" alt="cheap_flight" className="imghm" />
  </div>
</div>

<div >
    <div class="logininhome">
    <h4>To know more about us or to book tickets. Please Login</h4> <br/>
    <Link to="/login"><button className="log">Login</button></Link>
    </div>
</div>

<h3 className="visit">Some of the places you can travel</h3>
<div class="card-columns">
      <div class="card-body text-center">
        <img src="mumbai.jpg" className="card-img-top" alt="mumbai"/>
        <h5 class="card-title">Mumbai</h5>
        </div>
        <div class="card-body text-center">
        <img src="delhi.jpg" className="card-img-top" alt="delhi"/>
        <h5 class="card-title">Delhi</h5>
        </div>
        <div class="card-body text-center">
        <img src="kolkata.jpg" className="card-img-top" alt="kolkata"/>
        <h5 class="card-title">Kolkata</h5>
        </div>
        <div class="card-body text-center">
        <img src="bangalore.jpg" className="card-img-top" alt="bangalore"/>
        <h5 class="card-title">Bangalore</h5>
        </div>
        <div class="card-body text-center">
        <img src="amritsar.jpg" className="card-img-top" alt="amritsar"/>
        <h5 class="card-title">Amritsar</h5>
        </div>
        <div class="card-body text-center">
        <img src="kochi.jpg" className="card-img-top" alt="kochi"/>
        <h5 class="card-title">Kochi</h5>
        </div>
        </div>
       
        </>
    )
}

export default Home
