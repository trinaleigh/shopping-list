const item = (state = {}, action) => {
	if (action.type == 'TOGGLE') {
		if (state.id !== action.id) {
        	return state
      	} else {
			return { 
				purchased: !state.purchased, 
				id: state.id, 
				text: state.text }
      	}
    } else if (action.type == 'ADD_ITEM'){
    	return {
	        purchased: false,
	        id: action.id,
	        text: action.text,
    	}
	} else {
		return state
	}
}

const items = (state = [], action) => {
	if (action.type=='ADD_ITEM') {
		return [
		...state,
		item(undefined, action)
		]
	} else if (action.type=='TOGGLE') {
		return state.map(listItem =>
			item(listItem, action)
		)
	} else {
    	return state
  	}
}


export default items