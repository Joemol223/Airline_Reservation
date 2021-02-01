import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'



class Login extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = {    
          Email: '',    
        Password: '',
        formErrors: {}    
    }    
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.login = this.login.bind(this);

    //this.initialState = this.state;    
}  
Email(event){
  this.setState({Email: event.target.value})
}
Password(event){
  this.setState({Password: event.target.value})
}
handleFormValidation() {    
  const {  Email, Password } = this.state;    
  let formErrors = {};    
  let formIsValid = true;  

   //Email    
   if (!Email) {    
    formIsValid = false;    
    formErrors["emailIdErr"] = "*Email ID required";    
}    
 

 //Password
 if (!Password) {
  formIsValid = false;  
  formErrors["passwordErr"]= '*Password required';
} 

this.setState({ formErrors: formErrors });    
return formIsValid;    
}  
handleChange = (e) => {    
  const { name, value } = e.target;    
  this.setState({ [name]: value });    
}    

// handleSubmit = (e) => {    
//   e.preventDefault();    

//   if (this.handleFormValidation()) { 
    
//     alert('Login Successful')    
//     window.location.href="/Flight";
//    // this.setState(this.initialState)    
// } 
  
// } 
login(event) {
  event.preventDefault()
  
  fetch('https://localhost:44340/api/login/Login', {
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          Email: this.state.Email,
          Password: this.state.Password,
         
      })
  }).then((Response) => Response.json())
      .then((result) => {
          console.log(result);
          localStorage.setItem('user', this.state.Email)
          if (result.Status == 'Invalid')
          {
              alert('Invalid User');
          }
          else{
              this.props.history.push("/Flight");
             console.log("Success");
           //  window.location.href="/Flight";
          }
      })
}

  render(){
    const {  emailIdErr, passwordErr } = this.state.formErrors;  
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
         <img className="logo1"src="logo1.png" alt="logo" />
      </Link>

      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" id="qqt1">
     
      <li className="nav-item">
        <Link className="ppl1" style={{float:"right"}} to="/Register">Register</Link>
      </li>
    </ul>
 
  </div>
</nav>
              
            
            <h1>Login Form</h1> 
            <p>If you don't have any account then register first and login again</p>

            <div>    
                    <form onSubmit={this.login} >    
                          
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
                        <input type="submit"  class="btn" value="Login" />  
                        </div> 
                       <Link to="/Register"><span  style={{marginLeft:"100px"}}>Not Registered? Click Here</span></Link>
                    </form>    
                </div>    
            </div >  





         
    )
}
}
export default Login
