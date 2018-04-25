import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket =(props)=> {
    FruitBasket.defaultProps={
      fruit: props.fruit,
      filters: props.filters,
      currentFilter: props.currentFilter,
      updateFilterCallback: props.handleFilterChange,
    }
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} filters={props.filters} />
        <FilteredFruitList filter={props.currentFilter} items={props.items} />
      </div>
    );

}

export default FruitBasket;
