const items = (state = { purchased: false, id: 0 }, action) => {
	if (action.type == 'TOGGLE') {
		if (state.id !== action.id) {
        	return state
      	} else {
			return { purchased: !state.purchased, id: state.id }
      	}
	} else {
		return state
	}
}

export default items