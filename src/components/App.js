import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

  state = {
    selectedFilter: null,
    filters: [],
    items: []
  }

  componentWillMount() {
    this.fetchFilters();
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket items={this.state.items} filters={this.state.filters} selectedFilter={this.state.selectedFilter} handleFilterChange={this.handleFilterChange} />
    )
  }
}

export default App;
