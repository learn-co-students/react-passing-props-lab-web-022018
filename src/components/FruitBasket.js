import React  from 'react';

import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <FilteredFruitList
          filters={props.filters} />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  currentFilter: null,
  filters: [],
  updateFilterCallback: function() {}
};

export default FruitBasket;
