import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      filters: [],
      fruit: [],
      displayedFruit: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({
        fruit: items,
        displayedFruit: items
      }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = (event) => {
    if (event.target.value!=='all') {
      this.setState({
        displayedFruit: this.state.fruit.filter(fruit=>fruit.fruit_type===event.target.value)
      })
    } else {
      this.setState({
        displayedFruit: this.state.fruit
      })
    }
  }

  render(){
    return (
      <div>
        <FruitBasket props={this.state} handleChange={this.handleFilterChange}/>
      </div>
    )
  }
}

export default App;
