import React, { PropTypes } from 'react'

const Item = ({ onClick, purchased, text }) => {
	return (
	<p
		onClick={onClick}
		style={{
			textDecoration: purchased ? 'line-through' : 'none'
		}}
	>
		{text}
	</p>
	)
}

Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	purchased: PropTypes.bool.isRequired
}

export default Item