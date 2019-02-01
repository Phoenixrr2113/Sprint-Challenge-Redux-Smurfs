import React from 'react';
import Smurf from '../smurfs/Smurfs';

const SmurfsList = props => {
	console.log(props);
	return (
		<div>
			{props.smurfs.map(smurf => (
				<Smurf key={smurf.id} smurf={smurf} />
			))}
		</div>
	);
};
export default SmurfsList;
