import React from 'react'
import './Cancel.css'
import{Link} from 'react-router-dom';
import axios from "axios"


class Cancel extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      // ticketno:'',
      // flightno:'',
      // doj:'',
      // reason:'',
      // formErrors: {} 
      posts : [], 
      Email:''

    };
    
    // this.initialState = this.state;    
  }

  

//   handleFormValidation() {    
//     const {ticketno,flightno,doj,reason} = this.state;    
//     let formErrors = {};    
//     let formIsValid = true;    

//       if(!ticketno){
//         formIsValid = false;
//         formErrors["ticketnoErr"]="*Ticket Number required";
//       }
//       else{
//         var pattern =/^[0-9]{3}$/;
//        if(!pattern.test(ticketno)){
//         formIsValid = false;
//         formErrors["ticketnoErr"]="* Invalid Ticket Number";
//        }

//       }
//       if(!flightno){
//         formIsValid = false;
//         formErrors["flightnoErr"]="*Flight Number required";
//       }
//       else{
//         var fpattern =/^[0-9A-Z]{6}$/;
//        if(!fpattern.test(flightno)){
//         formIsValid = false;
//         formErrors["flightnoErr"]="* Invalid Flight Number";
//        }

//       }

//     //DOJ   
//     if (!doj) {    
//         formIsValid = false;    
//         formErrors["dojErr"] = "*Date of journey required";    
//     }    
   

//     if (!reason) {    
//       formIsValid = false;    
//       formErrors["reasonErr"] = "*Reason required";    
//   } 
     

   
     
    
//     this.setState({ formErrors: formErrors });    
//     return formIsValid;    
// }    

handleChange = (e) => {    
    const { name, value } = e.target;    
    this.setState({ [name]: value });    
}    

// handleSubmit = (e) => {    
//     e.preventDefault();    

//     // if (this.handleFormValidation()) { 

//        // alert('Are you sure?')   
//         axios.get(`https://localhost:44340/api/Booking?email=${this.state.Email}`)
//         .then(response => {
//             console.log(response)
//             this.setState({posts : response.data})
    
//         })
    
//         .catch(error => {
//             console.log(error)
//         }) 
       
//        // this.setState(this.initialState)    
       
// }  
componentDidMount(){
  var db = localStorage.getItem("user");
  axios.get(`https://localhost:44340/api/Booking?email=${db}`)
  .then(response => {
      console.log(response)
      this.setState({posts : response.data})

  })

  .catch(error => {
      console.log(error)
  })
}  
   



render() {
  // const { ticketnoErr,flightnoErr,dojErr,reasonErr  } = this.state.formErrors;   
  const {posts} = this.state
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


<h1>Ticket Cancellation</h1>
<br/>
{/* <p>Please provide proper information below for your ticket cancellation</p>  */}
<div className="rm">
  <p>Found your suitable flight?<br/>Then hurry up to grab your seats at lowest prices </p>
<Link to="/Booking"> <button className="btnl">Book</button></Link>
<hr/>

  <p>Any qurries?<br/> Want to contact us? <br/>Then click the below button </p>
<Link to="/Contact"> <button className="btnl">Contact</button></Link>
</div>
   {/* <div  className="form-group">
  <div>
  <form onSubmit={this.handleSubmit} id ="cancelbox">  
  <div  className="form-group">
  <label  className="fl" >Ticket Number:</label> <span></span>
  <input type="text" placeholder="Ticket Number" name="ticketno"   value={this.state.ticketno} onChange={this.handleChange} className={ticketnoErr ? ' showError' : ''}/> 
  {ticketnoErr && <div style={{ color: "red", paddingBottom: 10 }}>{ticketnoErr} </div>}  
</div>
<div  className="form-group">
  <label  className="fl">Flight Number:</label> <span></span>
  <input type="text" placeholder="Flight Number"  name="flightno"   value={this.state.flightno} onChange={this.handleChange} className={flightnoErr ? ' showError' : ''}/>
  {flightnoErr && <div style={{ color: "red", paddingBottom: 10 }}>{flightnoErr} </div>} 
</div>
<div  className="form-group">
  <label  className="fl">Date of journey</label> <span></span>
    <input type="date"  name="doj"   value={this.state.doj} onChange={this.handleChange} className={dojErr ? ' showError' : ''}/>
    {dojErr && <div style={{ color: "red", paddingBottom: 10 }}>{dojErr} </div>} 
</div>
<div  className="form-group">
    <label  className="fl">Reason of cancellation:</label> <span></span>
    <textarea  placeholder="Reason" rows="5" cols="40" name="reason"    value={this.state.reason} onChange={this.handleChange} className={reasonErr ? ' showError' : ''}/>
    {reasonErr && <div style={{ color: "red", paddingBottom: 10 }}>{reasonErr} </div>} 
</div>
     <div  className="form-group">
    <button type="submit" onClick={this.handleSubmit} className="btn2" id="btncan">Cancel</button>
    </div>
     
  </form>
  </div>
  
</div> */}
{/* <div>
  <form onSubmit={this.handleSubmit}>
    <label>Email:</label>
    <input type ="text" name="Email" value={this.state.Email} onChange={this.handleChange} />
    <button type="submit" className="btncan">Search</button>
  </form>
</div> */}
<br/>
 <table id="customers" className="mnn1">
            <tr>
              <th>Ticket No.</th>
            <th>Flight No.</th>
            <th>Flight Name</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Depature time</th>
            <th>Action</th>
            
          </tr>
          
         {                        posts.map((item, i) =>
                        <tr key={i}>
                            
                                <td>{item.TicketNo}</td>
                                <td>{item.FlightNo}</td>
                                <td>{item.Fname}</td>
                                <td>{item.FromPlace}</td>
                                <td>{item.ToPlace}</td>
                                <td>{item.DOJ}</td>
                                <td>{item.Depature}</td>
                                <td><button className="btnt" type="submit" onClick={this.delete=()=>{
                                  fetch('https://localhost:44340/api/Booking/'+item.TicketNo,{
                                    method:'DELETE',
                                    headers:{'Accept':'application/json',
                                    'Content-Type':'application/json'
                                  }
                                  })
                                  axios.post('https://localhost:44340/api/Cancel',{
                                    TicketNo:item.TicketNo,
                                    FlightNo:item.FlightNo,
                                    Fname:item.Fname,
                                    FromPlace:item.FromPlace,
                                    ToPlace:item.ToPlace,
                                    DOJ:item.DOJ,
                                    Depature:item.Depature
                                  }).then(json =>{
                                    window.alert("Are you sure?")
                                    window.location.href="/Cancel";
                                  })
                                }
                                }>Cancel</button></td>
                  
                        </tr>
                        )
                    }
         
          </table>
 </div>

         
        
            
 
 
    )
}
}
export default Cancel
