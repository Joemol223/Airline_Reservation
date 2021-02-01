import React from 'react'
import {Link} from 'react-router-dom'
import './Info.css'

class  Info extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title:'',
      fname:'',
      lname:'',
      age:'',
      gender:'',
      email:'',
      phone:'',
      address:'',
      formErrors: {}  

    };
    this.initialState = this.state;  
  }
  handleFormValidation() {    
    const {title,fname,lname,age,gender,email,phone,address} = this.state;    
    let formErrors = {};    
    let formIsValid = true;    

     
     

      if (title === '' || title === "select") {    
        formIsValid = false;    
        formErrors["titleErr"] = "*Select Title";    
    }  

      if(!fname){
        formIsValid = false;
        formErrors["fnameErr"]="*First Name required";
      }
     
      if(!lname){
        formIsValid = false;
        formErrors["lnameErr"]="*Last Name required";
      }
     

    //Age  
    if (!age) {    
        formIsValid = false;    
        formErrors["ageErr"] = "*Age required";    
    }  
    else{
      var apattern =/^[0-9]{1,2}$/;
      if(!apattern.test(age)){
        formIsValid = false;
        formErrors["ageErr"]="* Invalid Age";
       }

    }  
   

    if (gender === '' || gender === "select") {    
      formIsValid = false;    
      formErrors["genderErr"] = "*Select Gender";    
  }  
  if (!email) {    
    formIsValid = false;    
    formErrors["emailErr"] = "*Email ID required";    
}    
else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    

    formIsValid = false;    
    formErrors["emailErr"] = "*Invalid Email ID";    
}   

if (!phone) {    
  formIsValid = false;    
  formErrors["phoneErr"] = "*Phone Number required";    
}    
else {    
  var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
  if (!mobPattern.test(phone)) {    
      formIsValid = false;    
      formErrors["phoneErr"] = "*Invalid Phone Number";    
  }    
}  
//Address
if (!address) {    
formIsValid = false;    
formErrors["addressErr"] = "*Address required";    
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
      
           alert('Are you sure?')    
          window.location.href="/Payment";
        //this.setState(this.initialState)    
         }    
  
}    
   
  render ()
  {
    const {titleErr, fnameErr, lnameErr, ageErr, genderErr, emailErr, phoneErr, addressErr } = this.state.formErrors; 
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
<Link to="/Table"><button className="perv"> Pervious Page</button></Link>
<div  className="qut">
 
<h4 className="were" >Passenger Information</h4>
<hr/>
<div>
<form onSubmit={this.handleSubmit} id="infobox">
<label className="fl" ><h5>Personal Details :</h5></label><br/>
<div className="form-group">
<label id="bld"  >Title</label> <span></span>
        
        <select name="title" onChange={this.handleChange} className={titleErr ? ' showError' : ''}  value={this.state.title} >
        <option value="select">--Select--</option>       
 <option value="mr">Mr.</option>
   <option value="ms">Ms.</option>
   <option value="mrs">Mrs.</option>

</select>
{titleErr && <div style={{ color: "red", paddingBottom: 10 }}>{titleErr}</div>}
                            
</div>
<div className="form-group" >
<label  id="bld">First Name:</label>
        <input type="text" placeholder="First Name" name="fname" onChange={this.handleChange}  className={fnameErr ? ' showError' : ''}  value={this.state.fname}  />
        {fnameErr && <div style={{ color: "red", paddingBottom: 10 }}>{fnameErr}</div>}
 <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
<div id="right">
        <label  id="bld">Last Name:</label>
        <input type="text" placeholder="Last Name" name="lname" onChange={this.handleChange}  className={lnameErr ? ' showError' : ''}  value={this.state.lname}  />
        {lnameErr && <div style={{ color: "red", paddingBottom: 10 }}>{lnameErr}</div>}
        </div>
        </div>
        <div className="form-group" >  
        <label  id="bld">Age:</label>
        <input type="text" placeholder="Age" id="ageside"  name="age" onChange={this.handleChange}  className={ageErr ? ' showError' : ''}  value={this.state.age}  /> 
        {ageErr && <div style={{ color: "red", paddingBottom: 10 }}>{ageErr}</div>}
        <div id="jj">
        <label className="gen" id="bld">Gender:</label>
        <select  name="gender" onChange={this.handleChange}  className={genderErr ? ' showError' : ''}  value={this.state.gender}  >
        {genderErr && <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>}
        <option value="select" >--Select--</option>    
 <option value="from">Male</option>
   <option value="mumbai">Female</option>
   <option value="delhi">Others</option>
   </select>
{genderErr && <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>}
</div>
</div>
<br/>
<label className="fl"><h5 >Contact Details :</h5></label><br/>
<div className="form-group" >
<label  id="bld">Email ID:</label> 
<input type="text"  name="email" onChange={this.handleChange}  className={emailErr ? ' showError' : ''}  value={this.state.email}  ></input>
{emailErr && <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>}
<div id="right">
<label  id="bld" >Phone Number:</label> 
<input type="text" name="phone" onChange={this.handleChange}  className={phoneErr ? ' showError' : ''}  value={this.state.phone}   ></input>
{lnameErr && <div style={{ color: "red", paddingBottom: 10 }}>{phoneErr}</div>}
</div>
</div>
<div className="form-group">
<label  id="bld">Address:</label><br/>

<textarea type="text" cols="30" rows="4" name="address" onChange={this.handleChange}  className={addressErr ? ' showError' : ''}  value={this.state.address}  ></textarea>
{addressErr && <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>}
</div>


<input type="submit"  class="btni" value="Submit" />  

</form>
</div>

</div>

           
            
        </div>
    )
 }
 

}
export default Info
