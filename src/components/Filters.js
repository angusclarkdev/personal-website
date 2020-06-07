import React from 'react'
import FilterButton from './FilterButton'



const Filters = ({ filterOptions, setFilters  }) => {
  return (
    <div>
      {filterOptions.map((i) => {
        return (
          <FilterButton key={i} filterByCategory={() => setFilters(i)}> {i} </FilterButton>
        )
      })}
  </div>
  )
    }

export default Filters
