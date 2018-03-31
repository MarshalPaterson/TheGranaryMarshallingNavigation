import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import TheGranary from 'the-granary';

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.granary(TheGranary).getGranary('Tester').name,
			info: this.granary(TheGranary).getGranary('Form'),
			albums: this.filterAlbums(this.granary(TheGranary).getGranary('albums')),
			comments: this.granary(TheGranary).getGranary('comments'),
		};
	}
	static navigationOptions = {
		title: 'Welcome',
		headerLeft: null,
	};
	filterAlbums = (values) => {
		if(values)
			return values.map((item, index) => <View key={index}><Text key={item.id}>{item.title}</Text></View>);
		return "";		
	}
	granary = grainStore => {
		return grainStore.getInstance();
	};

	componentDidMount() {}
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<ScrollView style={styles.container}>
				{/* <Text>{this.state.data}</Text>
				<Text>{this.state.info}</Text> */}
				<Button title="Go to Details page" onPress={() => this.props.navigation.navigate('Details')} />
				<Button title="Go to Form page" onPress={() => this.props.navigation.navigate('Form')} />
				<Text>{this.state.albums}</Text>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
