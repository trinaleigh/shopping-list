const showHide = (state = 'ALL', action) => {
	if (action.type=='APPLY_FILTER') {
		return action.filter;
	} else {
		return state
	}
}

export default showHide