import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Marshalling from 'marshalling';
import TheGranary from 'the-granary';

class LoadingScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}
	static navigationOptions = {
		title: 'Loading',
	};
	componentDidMount() {
		let marshalling = new Marshalling.Marshall();
		let grain = TheGranary.getInstance();
		marshalling.getInstance().addService('comments', 'https://jsonplaceholder.typicode.com/comments');
		marshalling.getInstance().addService('albums', 'https://jsonplaceholder.typicode.com/albums');
		return Promise.all([marshalling.getInstance().law('comments'), marshalling.getInstance().law('albums')]).then(function(
			values
		) {
			grain.setGranary('comments', JSON.parse(String(values[0])));
			grain.setGranary('albums', JSON.parse(String(values[1])));		
		}).then(() => {
			this.props.navigation.navigate('Home');
		});
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
				{/* <Text>{this.state.data}</Text> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
export default LoadingScreen;
