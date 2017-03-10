import React, { PropTypes } from 'react'

const Item = ({ onClick, completed }) => {
	return (
	<p
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		something to buy
	</p>
	)
}

Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired
}

export default Item