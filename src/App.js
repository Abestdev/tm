import React, { Component } from 'react';
import logo from './Timepicker.png';
import './App.css';
import StatesField from './components/react-select.js';
import Country from './components/Country.js';
import Draggable from 'react-draggable';

// import flag from './flags/UA.png';
// import Draggable from 'react-draggable';




class App extends Component {
  render() {
    return (
      <div id="AppWrapper">
      <header className="App-header">
      <a href="http://localhost:3000/" className="App-logo"><img src={logo}  alt="logo" /></a>
      
      <StatesField/>
      </header>
           <div className="timepicker-wrapper" >
      <Draggable axis="x"      
      bounds={{top: 0, left: -173, right: 495, bottom: 0}}  
      >
      <div  className="hours-picker"></div>
      </Draggable>
      <Country/>
      <Country/>
      <Country/>
     </div>
      
      </div>
      );
}
}

export default App;
