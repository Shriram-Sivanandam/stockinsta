import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Auth from './src/screens/Auth';
import Main from './src/screens/Main';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch} from 'react-redux';
import {setUserID} from './src/redux/userSlice';

function App(): React.JSX.Element {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    EncryptedStorage.getItem('user_session')
      .then(res => {
        setUser(res === null ? '' : JSON.parse(res).token);
        dispatch(setUserID(res === null ? '' : JSON.parse(res).userid));
      })
      .catch(err => console.log(err));
  }, [dispatch]);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.app__mainContainer}>
          <NavigationContainer>
            {user === '' ? <Auth /> : <Main />}
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
});

export default App;
