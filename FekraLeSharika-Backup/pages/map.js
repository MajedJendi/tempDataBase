import Reac, { Component } from 'react';


import Map from '../components/map2'
//import Map from '../components/Map'

class map extends Component {
	
	render() {
		return (
			<div>
		        <Map
		        google={this.props.google}
		        center={{lat: 18.5204, lng: 73.8567}}
		        height='300px'
		        zoom={15}
		       />
			</div>
		);
	}
}

export default map;

