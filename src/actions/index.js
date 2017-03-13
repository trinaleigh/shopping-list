let counter = 0
export const addItem = (text) => {
	counter++
	return {
		type: 'ADD_ITEM',
		id: counter,
		text
	}
}

export const applyFilter = (filter) => {
	return {
		type: 'APPLY_FILTER',
		filter
	}
}

export const toggle = (id) => {
	return {
		type: 'TOGGLE',
		id
  }
}