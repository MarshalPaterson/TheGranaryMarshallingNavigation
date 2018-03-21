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
		marshalling.getInstance().addService('tester', 'https://jsonplaceholder.typicode.com/comments');
		marshalling
			.getInstance()
			.law('tester')
			.then(
				value => {
					let obj = JSON.parse(String(value));
					let g = TheGranary.getInstance();
					g.setGranary('Tester', obj[0]);

                    this.props.navigation.navigate('Home');
				},
				reason => {
					this.setState({
						data: reason,
					});
				}
			);
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
