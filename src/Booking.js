import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import './Booking.css'
import axios from "axios"

class Booking extends Component{

  constructor(props) {
    super(props);

    this.state = {
      posts : [],
         FromPlace:'select',
         ToPlace:'select',
         DOJ:'',
         FlightNo:'',
         Fname:'',
         Depature:'',
         Email:'',
         formErrors: {}         
    };
    this.initialState = this.state;  
  }
handleFormValidation() {  
    
  const {FromPlace,ToPlace,DOJ} = this.state;    
  let formErrors = {};    
  let formIsValid = true; 

  if (FromPlace=== '' || ToPlace === "select") {    
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
//  if (!Email) {    
//   formIsValid = false;    
//   formErrors["emailIdErr"] = "*Email ID required";    
// }    
// else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))) {    

//   formIsValid = false;    
//   formErrors["emailIdErr"] = "*Invalid Email ID";    
// } 

  this.setState({ formErrors: formErrors });    
  return formIsValid;  
}
handleChange = (e) => {    
  const { name, value } = e.target;    
  this.setState({ [name]: value });    
}   
Email(event){
  this.setState({Email: event.target.value})
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
setUser(item1,item2,item3,item4,item5,item6){
  this.setState({
    posts:[],
    FlightNo:`${item1}`,
    Fname: `${item2}`,
    FromPlace: `${item3}`,
    ToPlace: `${item4}`,
    DOJ:`${item5}`,
    Depature:`${item6}`

  })
}
 submitHandler = (e) => {    
  
   axios.post('https://localhost:44340/api/Booking', this.state)
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          console.log(error)
      })
      
      alert('Booking Successfull!')    
      window.location.href="/Payment";
      //this.setState(this.initialState)    
  }    

  render(){
    const{frErr,toErr,dojErr}=this.state.formErrors;
    const{posts}=this.state;
     return (
        <React.Fragment>
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


<h1>Ticket Booking</h1>
<p>Book your tickets now at cheapest price!!!</p>
<div>
<form onSubmit={this.handleSubmit} id="flightbox">    
  <div className="for-group">                  
  <label for="from" className="fl">Flying From</label>
  <span></span> <span></span>
  <select name="FromPlace" id="from"  value={this.state.FromPlace}  onChange={this.handleChange} className={frErr ? ' showError' : ''}  >
  <option value="from">From</option>
    <option value="mumbai">Mumbai</option>
    <option value="delhi">Delhi</option>
    <option value="bangalore">Bangalore</option>
    <option value="chennai">Chennai</option>
  </select>
  {frErr &&  <div style={{ color: "red" }}>{frErr}</div> } 
  </div>
  <div  className="for-group" >
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
  <div  className="for-group" >
  <label for="doj" className="fl">Date of journey</label>   <span></span> <span></span>
  <input type="date" id="depart" size="20" name="DOJ" value={this.state.DOJ}  onChange={this.handleChange}  className={dojErr ? ' showError' : ''}/>
    {dojErr &&  <div style={{ color: "red", paddingBottom: 10 }}>{dojErr}</div> } 
</div>

   <input type="submit" className="btn2" value="Search"/> 
 </form>
 </div>
 
 
   <div className="row" id="bk">
     <div className="col-sm" id="table" >
     
       <h3>Select your suitable flight</h3>
<hr/>
            <table id="customers" className="bkt">
            <tr>
            <th>Flight No.</th>
            <th>Flight Name</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Depature time</th>
            <th>Arrival time</th>
            <th>Price(Rs.)</th>
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
                                <td><button className="btnt" type="submit" onClick={()=> this.setUser(item.FlightNo,item.Fname,item.FromPlace,item.ToPlace,item.DOJ,item.Depature)}>Select</button></td>
                               </tr>
                                )}
         
          </table>
          </div>

     <div className="col-sm" id="det">
   <h3>Booking Details</h3>
   <hr/>
   <div>
     <label>Flight No.:</label>
     <input type="text" id="spc" name="FlightNo" value={this.state.FlightNo}onChange={this.handleChange} />
   </div>
   <div>
     <label>Flight Name:</label>
     <input type="text" id="spceee" value={this.state.Fname} name="Fname" onChange={this.handleChange}></input>
   </div>
   <div>
     <label>From:</label>
     <input type="text" id="spce" value={this.state.FromPlace} name="FromPlace" onChange={this.handleChange}></input>
   </div>
   <div>
     <label>To:</label>
     <input type="text" id="spcee" value={this.state.ToPlace} name="ToPlace" onChange={this.handleChange}></input>
   </div>
   <div>
     <label>Journey Date:</label>
     <input type="text" id="spceel" value={this.state.DOJ} name="DOJ" onChange={this.handleChange}></input>
   </div>
   <div>
     <label>Depature Time:</label>
     <input type="text" id="spceei" value={this.state.Depature} name="Depature" onChange={this.handleChange} ></input>
   </div>
   <div>
     <label>Email:</label>
     <input type="text" id="spci" name="Email" value={this.state.Email} onChange={this.handleChange}  ></input>
     {/* {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }  */}
   </div>
<input type="submit" value="Book" className="btn2" onClick={(e)=> this.submitHandler()}

/>
 </div>
   </div>

</React.Fragment>

    )
}
}

export default Booking
