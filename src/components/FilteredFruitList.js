import React, { Component } from 'react';

const FilteredFruitList = ({fruit}) => {
  return(fruit.map((fruit,i) =>

    <li key={i}>{fruit.char}</li>
   )
  )
}

FilteredFruitList.defaultProps = {
  fruit: []
};

export default FilteredFruitList;
