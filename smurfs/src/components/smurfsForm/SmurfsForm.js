import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';
import './smurfForm.css';

class SmurfsForm extends Component {
	state = {
		name: '',
		age: '',
		height: '',
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	addNewSmurf = event => {
		event.preventDefault();
		this.props.addSmurf(this.state);
	};
	render() {
		return (
			<form action="" className="smurfs-form">
				<input
					onChange={this.handleChange}
					name="name"
					value={this.state.name}
					type="text"
					placeholder="enter name"
				/>
				<input
					onChange={this.handleChange}
					name="age"
					value={this.state.age}
					type="text"
					placeholder="enter age"
				/>
				<input
					onChange={this.handleChange}
					name="height"
					value={this.state.height}
					type="text"
					placeholder="enter height"
				/>
				<button className="submit-btn" onClick={this.addNewSmurf}>
					Add Smurf
				</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAdding: state.isAdding,
	};
};
export default connect(
	mapStateToProps,
	{ addSmurf },
)(SmurfsForm);
