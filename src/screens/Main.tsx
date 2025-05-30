import {StyleSheet} from 'react-native';
import React from 'react';

import Home from './Home';
import Explore from './Explore';
//import Profile from './Profile';
//import CreatePost from './CreatePost';
import Profile from './Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconsSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsIon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const HomeTabBarIcon = (focused: boolean) =>
  focused ? (
    <IconsEntypo name="home" size={25} color="white" />
  ) : (
    <IconsSimple name="home" size={21} color="white" />
  );

const ExploreTabBarIcon = (focused: boolean) =>
  focused ? (
    <IconsIon name="compass" size={30} color="white" />
  ) : (
    <IconsIon name="compass-outline" size={30} color="white" />
  );

const ProfileTabBarIcon = (focused: boolean) =>
  focused ? (
    <IconsIon name="person" size={25} color="white" />
  ) : (
    <IconsIon name="person-outline" size={25} color="white" />
  );

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.app__tabBar,
        tabBarLabelStyle: styles.app__labelStyle,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: tabInfo => HomeTabBarIcon(tabInfo.focused),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: tabInfo => ExploreTabBarIcon(tabInfo.focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: tabInfo => ProfileTabBarIcon(tabInfo.focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  app__tabBar: {
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderColor: Colors.borderColor,
  },
  app__labelStyle: {
    color: 'white',
  },
});
