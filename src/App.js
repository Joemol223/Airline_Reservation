import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact"
import Flight from "./Flight";
import Booking from "./Booking";
import Cancel from "./Cancel";
import Payment from "./Payment";
import Table from "./Table";
import Info from "./Info";
import Succ from "./Succ";
import Table1 from "./Table1";



function App() {
  return (
    <div className="App">
      <Router>
     
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Flight" component={Flight}/>
          <Route path="/Booking" component={Booking}/>
          <Route path="/Cancel" component={Cancel}/>
          <Route path="/Payment" component={Payment}/>
          <Route path="/Table" component={Table}/>
          <Route path="/Table1" component={Table1}/>
          <Route path="/Info" component={Info}/>
          <Route path="/Succ" component={Succ}/>
         
          </Switch>
      </Router>
  <div>
    
  </div>
    </div>
  );
}


export default App;



