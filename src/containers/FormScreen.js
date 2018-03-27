import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import TheGranary from 'the-granary';

class FormScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.granary(TheGranary).getGranary('Tester').name,
			info: this.granary(TheGranary).getGranary('Form'),
		};
	}
	static navigationOptions = {
		title: 'Form',
		headerLeft: null,
	}
	granary = grainStore => {
		return grainStore.getInstance();
	}
	save = value => {
		this.granary(TheGranary).setGranary('Form', value);
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>{this.state.data}</Text>
				<TextInput
					style={{ height: 40, width: 70, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={info => this.setState({ info })}
					value={this.state.info}
				/>
				<Button title="Save" onPress={() => this.save(this.state.info)} />
				<Button title="Go to Details page" onPress={() => this.props.navigation.navigate('Details')} />
				<Button title="Go to Home page" onPress={() => this.props.navigation.navigate('Home')} />
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
export default FormScreen;
