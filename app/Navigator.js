import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthLoadingScreen from './auth/AuthLoadingScreen';
import SignInScreen from './auth/SignInScreen';
import Home from './home/Home';
import Search from './search/Search';
import CreateRoom from './room/CreateRoom';
import Private from './private/Private';
import Profile from './profile/Profile';


const AuthStack = createStackNavigator({
  SignIn: SignInScreen
}, {
  headerMode: 'none'
});

const AppStack = createBottomTabNavigator({
  Home: Home,
  Search: Search,
  CreateRoom: CreateRoom,
  Private: Private,
  Profile: Profile
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Search') {
        iconName = `ios-search${focused ? '' : '-outline'}`;
      } else if (routeName === 'CreateRoom') {
        iconName = `ios-add-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Private') {
        iconName = `ios-people${focused ? '' : '-outline'}`;
      } else if (routeName === 'Profile') {
        iconName = `ios-person${focused ? '' : '-outline'}`;
      }

      return <Ionicons name={iconName} size={26} color={tintColor} />;
    },
    tabBarVisible: navigation.state.routeName !== 'CreateRoom'
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  }, {
    initialRouteName: 'AuthLoading'
  }
);