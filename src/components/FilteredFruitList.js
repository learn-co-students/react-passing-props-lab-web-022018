import React from 'react'
const FilteredFruitList = (props) => {

  const fruits = !props.filter || props.filter === 'all' ?
    props.fruit : props.fruit.filter(x => x.fruit_type === props.filter)

  return (
    <ul className="fruit-list">
      {fruits.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: null,
  filter: 'all'
}

export default FilteredFruitList
