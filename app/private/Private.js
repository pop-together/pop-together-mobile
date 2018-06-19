import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Private extends Component {
  static navigationOptions = {
    title: 'Private',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Private screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
