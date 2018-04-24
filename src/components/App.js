import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{

	constructor() {
		super()
		this.state = {
			fruit: [],
			filters: [],
			currentFilter:null,
		}
	}


	componentWillMount() {
	    this.fetchFilters();
	}

	componentDidMount() {
	    fetch('/api/fruit')
	      .then(response => response.json())
	      .then(json => this.setState({...this.state, fruit: json }));
	}

	fetchFilters = () => {
		fetch('/api/fruit_types')
		  .then(response => response.json())
		  .then(json => this.setState({ ...this.state, filters: json }));
	}

	handleFilterChange = event => {
	    console.log('new filter: ', event.target.value);
	    this.setState({ selectedFilter: event.target.value });
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

export default App;
