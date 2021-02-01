import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css'
import axios from "axios"

export default class Contact extends React.Component {

  constructor(props) {    
    super(props);    
    this.state = {    
        Name: '',    
        Email: '',    
        Phone: '',    
        Meassge:'',
        formErrors: {}    
    };    

    this.initialState = this.state;    
}    

handleFormValidation() {    
    const { Name, Email, Phone, Meassge} = this.state;    
    let formErrors = {};    
    let formIsValid = true;    

    //Full name     
    if (!Name) {    
        formIsValid = false;    
        formErrors["fNameErr"] = "*Name required";    
    }    

    //Email    
    if (!Email) {    
        formIsValid = false;    
        formErrors["emailIdErr"] = "*Email ID required";    
    }    
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))) {    

        formIsValid = false;    
        formErrors["emailIdErr"] = "*Invalid Email ID";    
    }    

   

    //Phone number    
    if (!Phone) {    
        formIsValid = false;    
        formErrors["phoneNumberErr"] = "*Phone Number required";    
    }    
    else {    
        var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
        if (!mobPattern.test(Phone)) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "*Invalid Phone Number";    
        }    
    }  
    //Address
    if (!Meassge) {    
      formIsValid = false;    
      formErrors["messageErr"] = "*Meassage required";    
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

     axios.post('https://localhost:44340/api/Contact', this.state)
         .then(response => {
             console.log(response)
         })
         .catch(error => {
            console.log(error)
         })
        
        alert('Meassge Sent!')    
      
        this.setState(this.initialState)    
    }    
}    

  render(){
    const{fNameErr,emailIdErr,phoneNumberErr,messageErr} =this.state.formErrors;
    return (
        <>
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
<form onSubmit={this.handleSubmit} id="contactbox">
<div className="tull">
<div className="form-group">
      <h4>Send us a message</h4> <hr/>
      <div>
      <label>Name</label><br/>
      <input type="text" placeholder="Name" name="Name" id="form-control2"  value={this.state.Name}  onChange={this.handleChange}  className={fNameErr ? ' showError' : ''}/> 
      {fNameErr &&  <div style={{ color: "red", }}>{fNameErr}</div>   }                
      </div>
      <div>
      <label>Email</label><br/>
      <input type="text" placeholder="Email"id="form-control2" name="Email" value={this.state.Email}  onChange={this.handleChange}  className={emailIdErr ? ' showError' : ''} />
      {emailIdErr &&  <div style={{ color: "red", }}>{emailIdErr}</div>   } 
      </div>
      <div>
      <label>Mobile Number</label><br/>
      <input type="text" placeholder="Mobile"id="form-control2" name="Phone" value={this.state.Phone}  onChange={this.handleChange}  className={phoneNumberErr ? ' showError' : ''} /> 
      {phoneNumberErr &&  <div style={{ color: "red", }}>{phoneNumberErr}</div>   } 
    </div>
    <div>
      <label>Messge for us</label><br/>
      <textarea type="text"id="form-control2" name="Meassge" value={this.state.Meassge}  onChange={this.handleChange}  className={messageErr ? ' showError' : ''}/>
      {messageErr &&  <div style={{ color: "red", }}>{messageErr}</div>   }  </div>
      <input className="btnc" value="Contact" type="submit"/>
</div>
      </div>   
      </form>
<div className="row">
  <div >
    
      <img className="con"src="contact.png" alt="logo"/>
      {/* <div className="win">
      
        <h2>OneTravel</h2>
        <p className="cen"><b>Email:</b> onetravel@gamil.com <br/>
       <b> Phone Nos.:</b> 34567899 , 1234567 <br/>
     <b> Address : </b>Times Sqaure blg, Andheri West, Mumbai</p> 
     
       
      </div> */}
    
  </div>

 </div>

</>

        
    )
}
}
