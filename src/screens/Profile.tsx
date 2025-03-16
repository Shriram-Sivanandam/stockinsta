import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {CustomTextReg} from '../components/CustomText';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setUserID} from '../redux/userSlice';
import EncryptedStorage from 'react-native-encrypted-storage';

import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthRootStackParamList} from '../Types/Types';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<AuthRootStackParamList>>();
  const handleLogout = () => {
    EncryptedStorage.removeItem('user_session')
      .then(() => {
        dispatch(setUserID(''));
        navigation.navigate('Login');
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={styles.profile__mainCont}>
      <TouchableOpacity
        style={styles.profile__button}
        activeOpacity={0.8}
        onPress={handleLogout}>
        <CustomTextReg>Log Out</CustomTextReg>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile__mainCont: {
    backgroundColor: Colors.background,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  profile__button: {
    backgroundColor: Colors.redColor,
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
