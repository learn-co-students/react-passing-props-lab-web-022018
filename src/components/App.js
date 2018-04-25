import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  state = {
    filters: [],
    currentFilter: null,
    fruit: []
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
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

  render(){
    return <FruitBasket
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        handleFilterChange={this.handleFilterChange}
        fruit={this.state.fruit}
      />;
  }
}


export default App;
