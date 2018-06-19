import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default class CreateRoom extends Component {
  static navigationOptions = {
    title: 'Create'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Create Room</Text>
        <Button title="Go Back" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});