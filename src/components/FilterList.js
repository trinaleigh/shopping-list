import React from 'react'
import Category from '../containers/Category'

const FilterList = () => (
  <p>
    show: 
    <Category filter="ALL">
      all
    </Category>
    <Category filter="REMAINING">
      remaining
    </Category>
    <Category filter="PURCHASED">
      purchased
    </Category>
  </p>
)

export default FilterList