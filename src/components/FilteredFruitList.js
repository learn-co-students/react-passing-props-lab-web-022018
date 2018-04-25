import React, { Component } from 'react';

const FilteredFruitList = ({fruit, filter}) => {
  const list = !filter ? fruit : fruit.filter(f => f.fruit_type === filter)
  return (
    <ul className="fruit-list">{list.map((item, index) => <li key={index}>{item.char}</li>)}</ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}


//
// <ul className="fruit-list">{fruit.map((item, index) => <li key={index}>{item.char}</li>)}</ul>
//

//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentDidMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }
//
//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }

export default FilteredFruitList;
