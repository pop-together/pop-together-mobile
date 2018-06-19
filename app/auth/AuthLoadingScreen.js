import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View, StyleSheet } from 'react-native';


export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(()=> {
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }, 1000);    
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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
