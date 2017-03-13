import { connect } from 'react-redux'
import { toggle } from '../actions'
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
	return {
		items: state.items
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