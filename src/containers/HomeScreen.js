import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import TheGranary from 'the-granary';

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.granary(TheGranary).getGranary('Tester').name,
			info: this.granary(TheGranary).getGranary('Form'),
		};
	}
	static navigationOptions = {
		title: 'Welcome',
		headerLeft: null,
	};
	granary = grainStore => {
		return grainStore.getInstance();
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>{this.state.data}</Text>
				<Text>{this.state.info}</Text>
				<Button title="Go to Details page" onPress={() => this.props.navigation.navigate('Details')} />
				<Button title="Go to Form page" onPress={() => this.props.navigation.navigate('Form')} />
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
export default HomeScreen;
