import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props); //calls the parent method from Component (a lower level class)
    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
        />
      </div>
    )
  }
}

export default SearchBar;
