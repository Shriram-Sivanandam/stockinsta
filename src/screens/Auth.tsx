import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from './Auth/Login';
import Signup from './Auth/Signup';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationTypeForReplace: 'pop'}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default Auth;
