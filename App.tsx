import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Auth from './src/screens/Auth';
import Main from './src/screens/Main';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch} from 'react-redux';
import {setUserID} from './src/redux/userSlice';
import Toast from 'react-native-toast-message';
import Colors from './src/constants/Colors';
import {useSelector} from 'react-redux';
import {selectUserID} from './src/redux/userSlice';

function App(): React.JSX.Element {
  const dispatch = useDispatch();
  const userID = useSelector(selectUserID);

  useEffect(() => {
    if (userID !== null) {
      return;
    }
    EncryptedStorage.getItem('user_session')
      .then(res => {
        dispatch(setUserID(res === null ? '' : JSON.parse(res).userid));
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error in reading user session',
          text2: err,
        });
      });
  }, [dispatch, userID]);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.app__mainContainer}>
          <NavigationContainer>
            {userID === '' ? <Auth /> : <Main />}
          </NavigationContainer>
        </SafeAreaView>
      </BottomSheetModalProvider>
      <Toast topOffset={20} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  app__mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background,
  },
});

export default App;
