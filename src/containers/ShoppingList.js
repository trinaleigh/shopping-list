import { connect } from 'react-redux'
import { toggle } from '../actions'
import ItemList from '../components/ItemList'

const getItems = (items, filter) => {
	if (filter === 'ALL') {
		return items
	} else if (filter === 'PURCHASED') {
		return items.filter(listItem => listItem.purchased)
	} else {
		return items.filter(listItem => !listItem.purchased)
	}
}

const mapStateToProps = (state) => {
	return {
		items: getItems(state.items, state.showHide)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		checkUncheck: (id) => {
			dispatch(toggle(id))
		}
	}
}

const ShoppingList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemList)

export default ShoppingList