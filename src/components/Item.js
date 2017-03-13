import React, { PropTypes } from 'react'

const Item = ({ onClick, purchased, id }) => {
	return (
	<p
		onClick={() => onClick(id)}
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