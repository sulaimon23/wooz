import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Insurance from './components/Insurance/Insurance';
import MotorInsurance from './components/MotorInsurance/MotorInsurance';
import CustomNavbar from './components/CustomNavbar';
import NoMatch from './components/NoMatch';
import MoneyMatters from './components/MoneyMatters/MoneyMatters';
import OnTheGo from './components/OnTheGo/OnTheGo'
import FlightSearch from './components/FlightSearch/FlightSearch';
// import { NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/moneymatters" component={MoneyMatters} />
        <Route exact path="/moneymatters/insurance" component={Insurance} />
        <Route exact path="/moneymatters/insurance/motorinsurance" component={MotorInsurance} />
        <Route exact path="/onthego" component={OnTheGo} />
        <Route exact path="/onthego/flightsearch" component={FlightSearch} />
        <Route path='/nomatch' component={NoMatch} />
      </div>
    </Router>
  );
}

export default App;
