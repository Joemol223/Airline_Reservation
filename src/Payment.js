import React, { Component } from "react";  
import './Payment.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Payment extends Component {
  constructor(props) {
    super(props);
    this.state={
    Name:'',
    CardNo: '',
    //cardno:'',
   Month:'',
   Year:'',
    Cvv:'',
      formErrors: {}  

    };
    this.initialState = this.state;  
  }
  handleFormValidation() {    
    const {Name,CardNo,Month, Year,Cvv} = this.state;    
    let formErrors = {};    
    let formIsValid = true;    
   
    if(!Name){
      formIsValid = false;
      formErrors["cnameErr"]="*Name required";
    }
    if (!CardNo) {    
      formIsValid = false;    
      formErrors["numberErr"] = "*Card number required";    
  }    
  else {    
      var nPattern = /^4[0-9]{12}?$/;    
      if (!nPattern.test(CardNo)) {    
          formIsValid = false;    
          formErrors["numberErr"] = "*Invalid Card Number";    
      }    
  } 
    
   if (!Month) {    
    formIsValid = false;    
    formErrors["mothErr"] = "*Month required";  
  }
  else{
    var moPattern =/^[0-9]{2}$/;
    if (!moPattern.test(Month)) {    
      formIsValid = false;    
      formErrors["mothErr"] = "*Invalid Month";    
    }
    else if(Month >12){
      formIsValid = false;    
      formErrors["mothErr"] = "*Invalid Month";  
    }
  }
  
   
  
  if (!Year) {    
    formIsValid = false;    
    formErrors["yearErr"] = "*Year required";    
  }
  else{
    var yPattern =/^[0-9]{4}$/;
    if (!yPattern.test(Year)) {    
      formIsValid = false;    
      formErrors["yearErr"] = "*Invalid Year";    
    }
    else if(Year<2020){
      formIsValid = false;    
      formErrors["yearErr"] = "*Invalid Year";  
    }
  }
  if (!Cvv) {    
    formIsValid = false;    
    formErrors["cvvErr"] = "*CVV required";    
}    
else {    
    var cvPattern = /^[0-9]{3}$/;    
    if (!cvPattern.test(Cvv)) {    
        formIsValid = false;    
        formErrors["cvvErr"] = "*Invalid CVV";    
    }    
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
console.log("abc");
  if (this.handleFormValidation()) {  
    
    axios.post('https://localhost:44340/api/Customer', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
console.log("Inside handleformvalidation");
      alert('Payment Proceeding!!!')   
      window.location.href="/Succ";
      //this.setState(this.initialState)    
  }   
  else{
    console.log("cant load!!");
  } 
}    

  render(){
    const { cnameErr,numberErr,mothErr, yearErr,cvvErr  } = this.state.formErrors;   
    return (
        <div >
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
<Link to="/Info"><button className="per"> Pervious Page</button></Link>
<div className="pay">
    <h4>Payment Details</h4>
    <hr/>
    <form onSubmit={this.handleSubmit} id="paymentbox">
      <div className="form-group">
    <label>Cardholder Name <i>(Please enter the same name which is written on your card)</i></label> <br/>
    <input type="text" placeholder="Cardholder's Name" size="70"  name="Name" onChange={this.handleChange} className={cnameErr ? ' showError' : ''}  value={this.state.Name}/>
    {cnameErr && <div style={{ color: "red", paddingBottom: 10 }}>{cnameErr}</div>}
    </div>
    <div className="form-group">
    <label>Credit Card Number</label><br/>
    <input type="text" placeholder="Card Number" size="50" name="CardNo" onChange={this.handleChange} className={numberErr ? 'showError' : ''} value={this.state.CardNo}/>
    {numberErr && <div style={{color: "red", paddingBottom: 10}}>{numberErr}</div>}
    </div>
    <div className="form-group">
    <label>Expiry Date</label> <span></span> <span></span>

  <input type="text"  name="Month" placeholder="MM" onChange={this.handleChange} size="2" className={yearErr ? ' showError' : ''}  value={this.state.Month}/> 
  <span></span><span></span> <span><span>
    </span></span>
  <input type ="text" name="Year" placeholder="YYYY" onChange={this.handleChange} size="4" className={yearErr ? ' showError' : ''}  value={this.state.Year} />
  {mothErr && <div style={{ color: "red" }}>{mothErr}</div>}
  {yearErr && <div style={{ color: "red" }}>{yearErr}</div>}
  </div>
  
  <div className="form-group">
        <label>CVV</label> <span></span> <span></span>
        <input type="text" size="5"  name="Cvv" onChange={this.handleChange} className={cvvErr ? ' showError' : ''}  value={this.state.Cvv}/>
        {cvvErr && <div style={{ color: "red", paddingBottom: 10 }}>{cvvErr}</div>}
        </div>
      
       <input className="btnp" type="submit" value="Pay Now" />
    </form>
</div>              
        </div>
    )
  }
}

export default Payment
