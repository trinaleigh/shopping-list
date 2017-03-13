import React, { PropTypes } from 'react'

const Item = ({ onClick, purchased }) => {
	return (
	<p
		onClick={onClick}
		style={{
			textDecoration: purchased ? 'line-through' : 'none'
		}}
	>
		something to buy
	</p>
	)
}

Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	purchased: PropTypes.bool.isRequired
}

export default Item