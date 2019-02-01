import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import SmurfsForm from './smurfsForm/SmurfsForm';
import SmurfsList from './smurfsList/SmurfsList';

class App extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}
	render() {
		if (this.props.isFetching) {
			return <div>Please wait while we update state...</div>;
		}
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your Redux version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>
				<div>
					<SmurfsList smurfs={this.props.smurfs} />
					<SmurfsForm />
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching,
	};
};
export default connect(
	mapStateToProps,
	{ getSmurfs },
)(App);
