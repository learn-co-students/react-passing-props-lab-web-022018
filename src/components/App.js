import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{

  state={
    fruit: [],
    filters: [],
    currentFilter: null,
    items:[]
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ filter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render(){
    return(
      <FruitBasket handleFilterChange= {this.handleFilterChange}
          fruit={this.state.fruit}
          filters= {this.state.filters}
          currentFilter={this.state.filter}
          items={this.state.items}
      />
    )
  }

}


export default App;
