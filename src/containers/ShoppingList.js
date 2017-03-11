import { connect } from 'react-redux'
import { toggle } from '../actions'
import Item from '../components/Item'

const mapStateToProps = (state) => {
	return {
		completed: state.completed
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(toggle())
		}
	}
}

const ShoppingList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Item)

export default ShoppingList