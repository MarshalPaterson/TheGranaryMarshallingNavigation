import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import TheGranary from 'the-granary';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
	static navigationOptions = {
        title: 'Welcome',
        headerLeft: null
    }
    componentDidMount(){
        let g = TheGranary.getInstance();
        let t = g.getGranary("Tester");
        this.setState({data: t.name});
    }
	render() {
        const { navigate } = this.props.navigation;
		return <View style={styles.container} >
        <Text>{this.state.data}</Text>
		<Button title="Go to next page" onPress={() => this.props.navigation.navigate('Details')}></Button>
        </View>;
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