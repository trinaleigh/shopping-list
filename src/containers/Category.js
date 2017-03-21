import { connect } from 'react-redux'
import { applyFilter } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.showHide
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(applyFilter(ownProps.filter))
		}
	}
}

const Category = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default Category