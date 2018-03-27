import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TheGranary from 'the-granary';

class DetailsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { data: this.granary(TheGranary).getGranary('Tester').name };
	}
	static navigationOptions = {
		title: 'Details',
	}
	granary = grainStore => {
		return grainStore.getInstance();
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>{this.state.data}</Text>
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
export default DetailsScreen;
