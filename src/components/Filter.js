import React, { PropTypes } from 'react'

const Filter = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={event => {
         event.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Filter