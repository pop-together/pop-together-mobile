import React, { Component } from 'react';
import { View, Button, StyleSheet, AsyncStorage } from 'react-native';


export default class SignInScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
