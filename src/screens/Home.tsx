import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeRootStackParamList} from '../Types/Types';

import Feed from './Home/Feed';
import SearchUser from './Home/SearchUser';

const Stack = createStackNavigator<HomeRootStackParamList>();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationTypeForReplace: 'pop'}}>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="SearchUser" component={SearchUser} />
    </Stack.Navigator>
  );
};

export default Home;
