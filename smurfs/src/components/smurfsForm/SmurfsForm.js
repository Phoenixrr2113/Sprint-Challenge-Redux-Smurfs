import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';

class SmurfsForm extends Component {
	state = {
		name: '',
		age: '',
		height: '',
	};

	render() {
		return <div>SmurfsForm</div>;
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
