// import React from 'react';
//
// import FruitBasket from './FruitBasket';
//
// const App = () => <FruitBasket />;
//
// export default App;


import React, { Component }  from 'react';

import Filter from './Filter';
import FruitBasket from './FruitBasket.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter handleChange={this.handleFilterChange} filters={this.state.filters}/>
        <FruitBasket
          currentFilter={this.state.currentFilter} fruit={this.state.fruit} filters={this.state.filters}/>
      </div>
    );
  }
}

export default App;
