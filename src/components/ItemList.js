import React, { PropTypes } from 'react'
import Item from './Item'

const ItemList = ({ items, checkUncheck }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => checkUncheck(item.id)}
      />
    )}
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    purchased: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  checkUncheck: PropTypes.func.isRequired
}

export default ItemList