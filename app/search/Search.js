import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Search extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Search screen</Text>
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
