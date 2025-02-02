import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import IconsSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsIon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Login from './src/screens/Login';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Tab = createBottomTabNavigator();

const HomeTabBarIcon = (focused: boolean) =>
  focused ? (
    <IconsEntypo name="home" size={25} color="white" />
  ) : (
    <IconsSimple name="home" size={21} color="white" />
  );

const ExploreTabBarIcon = (focused: boolean) =>
  focused ? (
    <IconsIon name="compass" size={27} color="white" />
  ) : (
    <IconsIon name="compass-outline" size={27} color="white" />
  );

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.app__mainContainer}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarStyle: styles.app__tabBar,
                tabBarLabelStyle: styles.app__labelStyle,
                tabBarShowLabel: false,
              }}>
              <Tab.Screen
                name="Home"
                children={({navigation}) => <Home navigation={navigation} />}
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
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  app__mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  app__tabBar: {
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderColor: '#4b4c4d',
  },
  app__labelStyle: {
    color: 'white',
  },
});

export default App;
