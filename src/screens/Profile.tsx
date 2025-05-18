import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ProfileRootStackParamList} from '../Types/Types';

import ProfilePage from './ProfilePage';
import CreatePost from './CreatePost';

const Stack = createStackNavigator<ProfileRootStackParamList>();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationTypeForReplace: 'pop'}}>
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default Home;
