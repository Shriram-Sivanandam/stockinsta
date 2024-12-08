import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import PostCard from './src/components/PostCard';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const postCardProps = {
    userName: 'bye there',
    logoImage: 'https://reactjs.org/logo-og.png',
  };
  return (
    <SafeAreaView style={styles.app__mainContainer}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.app__tabBar,
          }}>
          <Tab.Screen
            name="Home"
            children={({navigation}) => <Home navigation={navigation} />}
          />
          <Tab.Screen
            name="Settings"
            children={({navigation}) => (
              <PostCard navigation={navigation} postCardProps={postCardProps} />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app__mainContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  app__tabBar: {
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderColor: '#4b4c4d',
  },
});

export default App;
