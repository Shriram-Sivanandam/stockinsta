import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ExploreRootStackParamList} from '../Types/Types';

import ExploreMain from './Explore/ExploreMain';
import SearchStock from './Explore/SearchStock';

const Stack = createStackNavigator<ExploreRootStackParamList>();

const Explore = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationTypeForReplace: 'pop'}}>
      <Stack.Screen name="ExploreMain" component={ExploreMain} />
      <Stack.Screen
        name="Search"
        component={SearchStock}
        initialParams={{pageNo: 0}}
      />
    </Stack.Navigator>
  );
};

export default Explore;
