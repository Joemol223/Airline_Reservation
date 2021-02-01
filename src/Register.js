import React, { Component } from "react";   
import{Link} from 'react-router-dom'; 
import axios from 'axios'
 
import './Register.css'
class Register extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            Cname: '',    
            Email: '',    
            DOB: '',    
            Gender: 'select',    
            Phone: '',    
            Address: '', 
            Password: '',
            confirm: '', 
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { Cname, Email, DOB, Gender, Phone, Address, Password , confirm} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Full name     
        if (!Cname) {    
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
    
        //DOB    
        if (!DOB) {    
            formIsValid = false;    
            formErrors["dobErr"] = "*Date of birth required";    
        }    
        else {    
            var pattern = /^([0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1]))$/;    
            if (!pattern.test(DOB)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "*Date of Birth format YYYY/MM/DD";    
            }    
        }    
    
        //Gender    
        if (Gender === '' || Gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "*Select Gender";    
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
        if (!Address) {    
          formIsValid = false;    
          formErrors["addressErr"] = "*Address required";    
      }   

        //Password
        if (!Password) {
            formIsValid = false;  
            formErrors["passwordErr"]= '*Password required';
          } else {
            var passPattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
            if (!passPattern.test(Password)) {
                formIsValid = false;  
            formErrors["passwordErr"] = '*Password need to be between 6 to 15 characters  which contain at least one numeric digit and a special character';
          }
          }
         
        //Confirm Password
        if (!confirm) {
            formIsValid = false;  
            formErrors["confirmErr"]= '*Password required';
          } else if (confirm !== Password) {
                formIsValid = false;  
            formErrors["confirmErr"] = '*Passwords do not match';
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

        axios.post('https://localhost:44340/api/Customer', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            
            alert('You have been successfully registered.')    
            window.location.href="/Login";
            //this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { fNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, addressErr, passwordErr, confirmErr } = this.state.formErrors;    
    
        return (    
            <div>
          <nav class="navbar navbar-expand-lg navbar-light ">
         <Link className="navbar-brand" to="/">
      <img className="logo1"src="logo1.png" alt="logo" />
   </Link>

   <div class="collapse navbar-collapse" id="navbarNav">
   <ul class="navbar-nav" id="qqt1">
   <li className="nav-item"  >
     <Link className="ppl1" to="/Login" style={{float:"right"}}>Login</Link>
   </li>
  
 </ul>

</div>
</nav>
<h1>Registration Form</h1> 
            <p>New user then please register first to login</p>
            <img src="register.png" alt="register" className="regimg" style={{float:"left"}}/>
            
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div className="form-group">    
                            <label htmlFor="fName">Full Name</label>    
                            <input type="text" name="Cname"    
                                value={this.state.Cname}   id="form-control"   
                                onChange={this.handleChange}    
                                placeholder="Your full name"    
                                className={fNameErr ? ' showError' : ''} />    
                            {fNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{fNameErr}</div>    
                            }    
    
                        </div>    
                        <div  className="form-group">    
                            <label htmlFor="emailId">Email ID</label>    
                            <input type="text" name="Email"    
                                value={this.state.Email} id="form-control"  
                                onChange={this.handleChange}    
                                placeholder="Email"    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                        <div  className="form-group">    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="DOB"    
                                value={this.state.DOB}    id="form-control"  
                                onChange={this.handleChange}    
                                placeholder="YYYY/MM/DD"    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div  className="form-group">    
                            <label htmlFor="gender">Gender</label>    
                            <select name="Gender" onChange={this.handleChange}   id="form-control"   
                                className={genderErr ? ' showError' : ''}   
                                value={this.state.Gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div  className="form-group">    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="Phone"    
                                onChange={this.handleChange}    id="form-control"  
                                value={this.state.Phone}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div> 
                        <div  className="form-group">    
                            <label htmlFor="address">Address</label>    
                            <textarea type="text" name="Address" 
                                value={this.state.Address}  id="form-control1"    
                                onChange={this.handleChange}    
                                placeholder="Your address"  
                                className={addressErr ? ' showError' : ''} />    
                            {addressErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>    
                            }   
                            </div>
                               <div  className="form-group">    
                            <label htmlFor="password">Password</label>    
                            <input type="password" name="Password"    
                                onChange={this.handleChange}    id="form-control"  
                                value={this.state.Password}    
                                placeholder="Password"    
                                className={passwordErr ? ' showError' : ''} />    
                            {passwordErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>    
                            }    
                        </div>  
                        <div  className="form-group">    
                            <label htmlFor="confirm"> Confirm Password</label>    
                            <input type="password" name="confirm"    
                                onChange={this.handleChange}    id="form-control"  
                                value={this.state.confirm}    
                                placeholder="Confirm Password"    
                                className={confirmErr ? ' showError' : ''} />    
                            {confirmErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{confirmErr}</div>    
                            }    
                        </div> 
    
                       
                           
                        <div  className="form-group">
                        <input type="submit"  class="btn" value="Submit" />   
                        </div> 
                       <Link to="/Login"><span  style={{marginLeft:"70px"}}>Already registered? to Login click here</span></Link>
                    </form>    
                </div>  
                </div>  
         
            
        )    
    }    
}    
    
export default Register;