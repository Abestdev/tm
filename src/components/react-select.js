import React from 'react';

// import PropTypes from 'prop-types';
import Select from 'react-select';
import './react-select.css';
import moment from 'moment-timezone';
import {countriesArr} from './countriesArr.js';
// import { Async } from 'react-select';
// import Clock from './clock-example.js';


// var now = moment().format();

// var timeZones = moment.tz.names("");


/*var options1=timeZones.map(function(item, index) {
return (
<div key={index}timeZones={item} >

</div>
)

});
console.log(options1);*/

// options={users.map((user) => <User key={user.id} user={user} />)}
 
// console.log(timeZones);

var here = moment.tz.guess("Z z");


// var nowutc = moment.tz().format("Z z");

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








// const countries = timeZones.map((country) =>  <li > {country}</li>);

// ReactDOM.render(<ul>{countries}</ul>, document.getElementById('root'));



/*
class ReviewsList extends Component {
  render() {
    var reviewItems = this.props.reviews.map(function (review) {  // ERROR
      return (
        <RecipeReviewItem key={review.objectId} reviewText={review.reviewText}></RecipeReviewItem>
      )
    });

    return (
      <View>{reviewItems}</View>
    );
  }
}

ReviewsList.propTypes: {
   reviews : React.PropTypes.array.isRequired,
}
 ReviewsList.getDefaultProps() {
    return {
      reviews: [],
    };
}
*/
	






/*
class StatesField extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    return (
    	<div>
      <Select
        id="state-select-input"
					ref="stateSelect"
        placeholder="Enter country"
          removeSelected={this.state.removeSelected}
					simpleValue
					clearable={this.state.clearable}
					name="selected-state"
					disabled={this.state.disabled}
					value={this.state.selectValue}
					onChange={this.updateValue}
        
        options={[
          { value: 'one', label: 'One' },
          { value: {countries} },
        ]}
      />
      <ul>{countries}</ul>
      </div>
    );
  }
}

export default StatesField;*/

// const STATES = require('../data/states');

class StatesField extends React.Component {
  state = {
    selectedOption: '',
  }

	// getDefaultProps () {
	// 	return {
	// 		label: 'States:',
	// 		searchable: true,
	// 	};
	// }
	getInitialState () {
		return {
			country: 'AU',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: 'new-south-wales',
			clearable: true,
			rtl: false,
		};
	}
	switchCountry (e) {
		var newCountry = e.target.value;
		this.setState({
			country: newCountry,
			selectValue: null,
		});
	}
	updateValue (newValue) {
		this.setState({
			selectValue: newValue,
		});
	}
	focusStateSelect () {
		this.refs.stateSelect.focus();
	}
	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	}
	render () {
		// var options = STATES[this.state.country];
		return (
			<div>
			<div className="select-input-section">
				<Select
					id="state-select-input"
					ref="stateSelect"
					autoFocus
					  options = {countriesArr}
					// options = {o}

					// options={[
     //      { value: 'one', label: 'One' },
     //      { value: '2', label: 'Two' },
     //    ]}



          placeholder="Enter country"
          removeSelected={this.state.removeSelected}
					simpleValue
					clearable={this.state.clearable}
					name="selected-state"
					disabled={this.state.disabled}
					value={this.state.selectValue}
					onChange={this.updateValue}
					rtl={this.state.rtl}
					openOnClick={false}
					searchable={this.state.searchable}
					

				/>
			</div>		
			<span className="user-geo-position">
      Your curent position is {here}  <Clock/>
      </span>
      </div>
			
		);
	}
}
	StatesField.defaultProps = {
  	label: 'States:',
			searchable: true,
};

// module.exports = StatesField;
export default StatesField;





