import React, { Component } from 'react';
import './Country.css';
import flag from '.././flags/UA.png';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.clock = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <span>
        
        <span>It is {this.state.date.toLocaleTimeString()}.</span>
      </span>
    );
  }
}


export default class Country extends Component {
      state = {
          isOpen: true,
         }
    onDelete = () => {
      
      this.setState({
            isOpen: false           
        })
      console.log("state", this.state)
   
}





render() {
    return (
 
      <section className="country-info-container" style={{display: this.state.isOpen ? 'block' : 'none' }}>
      <div className="country-info" >


      <button className="remove-country"  onClick={this.onDelete}></button>


      <span className="country-flag"><img src={flag} alt="flag"/></span>
      <span className="country-name">Ukraine</span>
      <span className="country-timezone">UTC+2</span>
      <span className="country-time"><Clock/> {new Date().toLocaleDateString()} </span>
      <span className="country-offSet">   +00:00</span>
      </div>
      <div className="hours-section">
      <ul className="hours-list">
      <li className="night-hours">1</li>
      <li className="night-hours">2</li>
      <li className="night-hours">3</li>
      <li className="night-hours">4</li>
      <li className="night-hours">5</li>
      <li className="morning-hours">6</li>
      <li className="morning-hours">7</li>
      <li className="day-hours">8</li>
      <li className="day-hours">9</li>
      <li className="day-hours">10</li>
      <li className="day-hours">11</li>
      <li className="day-hours">12</li>
      <li className="day-hours">13</li>
      <li className="day-hours">14</li>
      <li className="day-hours">15</li>
      <li className="day-hours">16</li>
      <li className="day-hours">17</li>
      <li className="morning-hours">18</li>
      <li className="morning-hours">19</li>
      <li className="morning-hours">20</li>
      <li className="morning-hours">21</li>
      <li className="night-hours">22</li>
      <li className="night-hours">23</li>
      <li className="night-hours">24</li>
      </ul>
      </div>
      </section> 
      
     

      );
}


}

