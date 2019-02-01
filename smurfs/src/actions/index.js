import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetchINGing, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCHING_SMURF });
	axios
		.get(`http://localhost:3333/smurfs`)
		.then(res => dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: FETCHING_SMURF_FAILURE, payload: err }));
};
