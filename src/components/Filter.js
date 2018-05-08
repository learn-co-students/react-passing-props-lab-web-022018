import React, { Component } from 'react';

const Filter = ({filters, handleFilterChange}) => {
  return(
    <select onChange = {handleFilterChange} defaultValue= 'all'>
      <option value = "all">All</option>
      {filters.map(f => {return(<option key={f} value={f}>{f}</option>)})}
    </select>
  )
}
Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
};
export default Filter;
