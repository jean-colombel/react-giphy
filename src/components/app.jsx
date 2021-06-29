import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			gifs: [],
			selectedGifId: "26FPsOhR3tyQRTc2Y"
		}

		this.search('Homer thinks')
	}

	render() {
		return (
			<div>
				<div className="left-scene">
					<SearchBar search={this.search}/>
					<div className="selected-gif">
						<Gif id={this.state.selectedGifId}/>	
					</div>
				</div>
				<div className="right-scene">
					<GifList gifs={this.state.gifs} updateGif={this.updateGif}/>
				</div>
			</div>		
		)
	}

	updateGif = (id) => {
		this.setState({
			selectedGifId: id
		});
	}

	search = (query) => {
		//TODO API call
		giphy('nxjJ6nnoXszHOVIhzodwYxZYEy74VEIG').search({
			q: query,
			rating: 'g',
			limit: 10
		}, (error, result) => {
			this.setState({
				gifs: result.data
			});
		});
	}
}

export default App