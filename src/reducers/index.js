import { combineReducers } from 'redux'
import items from './items.js'
import showHide from './showHide.js'

const lister = combineReducers({
  items,
  showHide
})

export default lister