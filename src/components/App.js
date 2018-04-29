import React from 'react'
import FruitBasket from './FruitBasket'
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
  	    this.fetchFilters();
  }

  componentDidMount() {
      fetch('/api/fruit')
        .then(x => x.json())
        .then(json => this.setState({...this.state, fruit: json }))
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(x => x.json())
      .then(json => this.setState({ ...this.state, filters: json }));
  }

  handleFilterChange = event => {
      this.setState({ selectedFilter: event.target.value })
  }

  render() {
    return (
      <FruitBasket
          fruit={this.state.fruit}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          onUpdateFilter={this.updateFilter}
      />
    )
  }
}
