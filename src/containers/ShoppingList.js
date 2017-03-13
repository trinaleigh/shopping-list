import { connect } from 'react-redux'
import { toggle } from '../actions'
import Item from '../components/Item'

const mapStateToProps = (state) => {
	return {
		purchased: state.items.purchased,
		id: state.items.id
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (id) => {
			dispatch(toggle(id))
		}
	}
}

const ShoppingList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Item)

export default ShoppingList