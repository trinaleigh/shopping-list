import React, { PropTypes } from 'react'

const Item = ({ onClick, purchased, text }) => {
	return (
	<li
		onClick={onClick}
		style={{
			textDecoration: purchased ? 'line-through' : 'none'
		}}
	>
		{text}
	</li>
	)
}

Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	purchased: PropTypes.bool.isRequired
}

export default Item