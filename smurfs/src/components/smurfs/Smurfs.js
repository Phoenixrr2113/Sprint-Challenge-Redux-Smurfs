import React from 'react';
import './smurf.css';

const Smurf = props => {
	return (
		<div className="smurf-card">
			<div className="smurf-name">{props.smurf.name}</div>
			<div className="smurf-age">
				<span>Age: </span> {props.smurf.age}
			</div>
			<div className="smurf-height">
				<span>Height: </span> {props.smurf.height}
			</div>
		</div>
	);
};

export default Smurf;
