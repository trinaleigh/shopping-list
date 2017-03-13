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

const Categories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default Categories