import React from 'react';
import Smurf from '../smurfs/Smurfs';
import './smurfsList.css';

const SmurfsList = props => {
	return (
		<div className="smurf-list">
			{props.smurfs.map(smurf => (
				<Smurf key={smurf.id} smurf={smurf} />
			))}
		</div>
	);
};
export default SmurfsList;
