import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter filters={this.props.filters} handleChange={this.props.handleFilterChange} />
        <FilteredFruitList items={this.props.items} filter={this.props.selectedFilter} />
      </div>
    );
  }
}

export default FruitBasket;
