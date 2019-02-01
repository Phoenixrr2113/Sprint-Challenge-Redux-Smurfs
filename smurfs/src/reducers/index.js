/*
  Be sure to import in all of the action types from `../actions`
*/

import {
	FETCHING_SMURF,
	FETCHING_SMURF_SUCCESS,
	FETCHING_SMURF_FAILURE,
} from '../actions';

const initialState = {
	smurfs: [],
	isFetching: false,
	error: 'no errors yet.',
};

const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_SMURF:
			return {
				...state,
				isFetching: true,
				error: 'no errors yet.',
			};
		case FETCHING_SMURF_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isFetching: false,
				error: 'no errors yet.',
			};
		case FETCHING_SMURF_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: 'no erros yet.'
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default smurfReducer;
