const items = (state = { purchased: false }, action) => {

	if (action.type == 'TOGGLE') {
		return { purchased: !state.purchased };
	} else {
		return state
	}
}

export default items