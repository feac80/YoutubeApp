import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };
  onButtonClick = e => {
    this.props.searchVideo(this.state.term);
  };
  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          type="text"
        />

        <input
          className="btn btn-sm btn-danger "
          onClick={this.onButtonClick}
          type="button"
          value="Seacrh Video"
        />
      </div>
    );
  }
}
export default SearchBar;
