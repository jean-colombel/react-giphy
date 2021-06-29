import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<input type="text" className="form-control form-search" placeholder="Search here"
				onChange={this.handleUpdate}/>
		)
	}

	handleUpdate = (event) => {
		this.props.search(event.target.value);
	}
}

export default SearchBar