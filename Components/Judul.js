import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return(
			<Text style={salon.judul}>BIODATA</Text>
		)
	}
}
const salon = {
	judul: {
		color : '#ffff',
		fontSize : 50,
		fontWeight : 'bold',
		backgroundColor : '#f442a7'
	}
}
export default Judul;