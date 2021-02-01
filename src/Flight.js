import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios"
import './Flight.css'

class Flight extends Component {
  constructor(props) {
    super(props)

    this.state = {
         posts : [],
         FromPlace:'select',
         ToPlace:'select',
         DOJ:'',
         formErrors: {}         
    };
    this.initialState = this.state;  
  }
  
handleFormValidation() {  
    
  const {FromPlace,ToPlace,DOJ} = this.state;    
  let formErrors = {};    
  let formIsValid = true; 

  if (FromPlace === '' || FromPlace === "select") {    
    formIsValid = false;    
    formErrors["frErr"] = "*Select From Destination";    
  } 
if (ToPlace === '' || ToPlace === "select") {    
  formIsValid = false;    
  formErrors["toErr"] = "*Select To Destination";    
 } 

  if (!DOJ) {    
    formIsValid = false;    
    formErrors["dojErr"] = "*Date of journey required";    
 }   

  this.setState({ formErrors: formErrors });    
  return formIsValid;  
}
handleChange = (e) => {    
  const { name, value } = e.target;    
  this.setState({ [name]: value });    
}    

handleSubmit = (e) => {    
  e.preventDefault();    
  if (this.handleFormValidation()) {   
   console.log(this.state);
   axios.get(`https://localhost:44340/api/Flight?fr=${this.state.FromPlace}&to=${this.state.ToPlace}`)  
   .then(response => {
    console.log(response)
    this.setState({posts : response.data})

})

.catch(error => {
    console.log(error)
})
  //  .then(res =>{
  //    const data = res.data;
  //    const slice = data.slice(this.state.offset, this.state.offset+this.state.perPage)

  //    this.setState({
  //      pageCount: Math.ceil(data.length/this.state.perPage),
  //      orgatableData:res.data,
  //      tableData:slice
  //    })
  // })
    
  }  
}  

render(){
  const { frErr, toErr, dojErr} = this.state.formErrors;
  const{posts}=this.state;
    return (
    
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
         <img className="logo1"src="logo1.png" alt="logo" />
      </Link>
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
<div>
    <h1>Our Flight Schedule</h1>
    <img src="shld.jpg" alt="flight" className="sld"></img>
    <div className="rf">
  <p>Found your suitable flight?<br/>Then hurry up to grab your seats at lowest prices </p>
<Link to="/Booking"> <button className="btnl">Book</button></Link> <hr/>
<p>Any qurries?<br/> Want to contact us? <br/>Then click the below button </p>
<Link to="/Contact"> <button className="btnl">Contact</button></Link>
</div>
    {/* <div class="card" id="card1">
  <div class="card-body"> */}
  <form onSubmit={this.handleSubmit} id="flightbox">    
  <div >                  
  <label for="from" className="fl">Flying From</label>
  <span></span> <span></span>
  <select name="FromPlace" id="from"  value={this.state.FromPlace}  onChange={this.handleChange}  className={frErr ? ' showError' : ''}  >
  <option value="from">From</option>
    <option value="mumbai">Mumbai</option>
    <option value="delhi">Delhi</option>
    <option value="bangalore">Bangalore</option>
    <option value="chennai">Chennai</option>
  </select>
  {frErr &&  <div style={{ color: "red" }}>{frErr}</div> } 
  </div>
  <div  >
  <label for="from" className="fl">Moving To</label>
  <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
  <select name="ToPlace" id="to"  value={this.state.ToPlace}  onChange={this.handleChange}  className={toErr ? ' showError' : ''}>
  <option value="from">To</option>
    <option value="mumbai">Mumbai</option>
    <option value="delhi">Delhi</option>
    <option value="bangalore">Bangalore</option>
    <option value="chennai">Chennai</option>
  </select>
  {toErr &&  <div style={{ color: "red", paddingBottom: 10 }}>{toErr}</div> } 
  </div>
  <div  >
  <label for="doj" className="fl">Date of journey</label>   <span></span> <span></span>
  <input type="date" id="depart" size="20" name="DOJ" value={this.state.DOJ}  onChange={this.handleChange}  className={dojErr ? ' showError' : ''}/>
    {dojErr &&  <div style={{ color: "red", paddingBottom: 10 }}>{dojErr}</div> } 
</div>
<input type="submit" className="till"   value="Search Flight"/> 
</form>
<br/><br/><br/><br/><br/><br/>
<div className="tab">
<h3>Schedule</h3>
<hr/>
            <table id="customers" className="mnn">
              <thead>
            <tr>
            <th>Flight No.</th>
            <th>Flight Name</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Depature time</th>
            <th>Arrival time</th>
          </tr>
          </thead>
          <tbody>
          { posts.map((item, i) =>
                        <tr key={i}>
                            
                                <td>{item.FlightNo}</td>
                                <td>{item.Fname}</td>
                                <td>{item.FromPlace}</td>
                                <td>{item.ToPlace}</td>
                                <td>{item.DOJ}</td>
                                <td>{item.Depature}</td>
                                <td>{item.Arrival}</td>
                               </tr>
                                )}

           </tbody>                     
         
          </table>
 </div>
          



  </div>
  </div>
            

   
    )   
}
}


export default Flight;
