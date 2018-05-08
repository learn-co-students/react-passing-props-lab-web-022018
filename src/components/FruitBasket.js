import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({filters, onSelectFilter, fruit}) => {
  return(
    <div>
      <Filter
      filters = {filters}
      handleFilterChange = {onSelectFilter}
      />
      <ul className="fruit-list">
      <FilteredFruitList
        fruit= {fruit}
      />
      </ul>
    </div>
  )
}
FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};

export default FruitBasket;
