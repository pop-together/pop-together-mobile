import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.headerButton, styles.activeHeaderButton]}>
            <Text style={styles.headerButtonText}>Now</Text>
          </View>
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Activity</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.content}>
          </View>
          <View style={styles.content}>
          </View>
          <View style={styles.content}>
          </View>
        </View>
      </View>
    );
  }
  
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb54d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
    backgroundColor: '#ff9f1a',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    opacity: 0.7
  },
  activeHeaderButton: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
    opacity: 1,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 18
  },
  contentContainer: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 3,
    shadowRadius: 2,
    marginBottom: 25,
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#fff',
    backgroundColor: '#fff',
  }
});
