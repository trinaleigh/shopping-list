const showHide = (state = 'ALL', action) => {

	if (action.type=='SET_FILTER') {
		return action.filter;
	} else {
		return state
	}
}

export default showHide