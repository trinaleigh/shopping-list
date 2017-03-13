import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let ItemInput = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addItem(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}
ItemInput = connect()(ItemInput)

export default ItemInput
