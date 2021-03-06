import React, { Component } from 'react';

class Gif extends Component {
	render() {
		const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
		return (
			<img src={src} alt="gif" className="gif" onClick={this.handleClick} />
		)
	}

	handleClick = (event) => {
		this.props.updateGif(this.props.id)
	}
}

export default Gif;
