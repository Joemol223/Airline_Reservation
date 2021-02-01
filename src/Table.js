import axios from "axios"
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Table.css'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
         posts : [],
      
         

         

    }
    

}


componentDidMount()
{
    axios.get('https://localhost:44340/api/Flight')
    .then(response => {
        console.log(response)
        this.setState({posts : response.data})

    })

    .catch(error => {
        console.log(error)
    })
}
render(){
  const {posts} = this.state
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

<div></div>
<Link to="/Booking"><button className="per"> Pervious Page</button></Link>
<div className="tab">

<h3>Select your suitable flight</h3>
<hr/>
            <table id="customers" className="mnn">
            <tr>
            <th>Flight No.</th>
            <th>Flight Name</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Depature time</th>
            <th>Arrival time</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          
          { posts.map((item, i) =>
                        <tr key={i}>
                            
                                <td>{item.FlightNo}</td>
                                <td>{item.Fname}</td>
                                <td>{item.FromPlace}</td>
                                <td>{item.ToPlace}</td>
                                <td>{item.DOJ}</td>
                                <td>{item.Depature}</td>
                                <td>{item.Arrival}</td>
                                <td>{item.Price}</td>
                                <td><button type="Submit" onClick={this.AddFlight=()=>{
                                  axios.post('https://localhost:44340/api/Booking',{
                                    FlightNO:item.FlightNo, Fname:item.Fname,FromPlace:item.FromPlace,
                                    ToPlace:item.ToPlace, DOJ:item.DOJ,Depature:item.Depature
                                  })
                                  .then(json =>{
                                    window.alert("Flight Booked!!")
                                    window.location.href="/Info"
                                  })
                                }
                                }className="btnt">Book</button> </td>
                               </tr>
                                )}
         
          </table>
 </div>
        </div>
    )
}
}

export default Table
