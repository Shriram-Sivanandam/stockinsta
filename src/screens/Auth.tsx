import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Explore from './Explore';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Explore: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Explore" component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
