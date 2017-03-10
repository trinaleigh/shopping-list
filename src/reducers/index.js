import { combineReducers } from 'redux'


const lister = (state = { completed: false }, action) => {

	if (action.type=='TOGGLE') {
		return { completed: !state.completed };
	} else {
		return state
	}
}

// const lister = combineReducers({
//   items,
//   showHide
// })

export default lister