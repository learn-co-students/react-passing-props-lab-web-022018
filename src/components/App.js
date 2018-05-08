import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }
  componentDidMount() {
    fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => this.setState({ filters }));
    fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({fruit}))
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentFilter !== this.state.currentFilter){
      fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit: fruit.filter(fruit => fruit.fruit_type === this.state.currentFilter) }));
    }
  }
  handleFilterChange = event => {
    this.setState({currentFilter: event.target.value})
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <FruitBasket
          filters={this.state.filters}
          onSelectFilter={this.handleFilterChange}
          fruit={this.state.fruit}
        />
      </div>
    )
  }
}
export default App;
