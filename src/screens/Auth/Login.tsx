import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

import {BASE_URL} from '../../frontend-api-service/Base/index';
import {CustomTextReg} from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import Colors from '../../constants/Colors';
import EncryptedStorage from 'react-native-encrypted-storage';

import {
  useNavigation,
  NavigationProp,
  StackActions,
} from '@react-navigation/native';
import {AuthRootStackParamList} from '../../Types/Types';
import Toast from 'react-native-toast-message';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  axios.defaults.withCredentials = true;

  const navigation = useNavigation<NavigationProp<AuthRootStackParamList>>();

  const storeUserSession = async (userid: string, token: string) => {
    EncryptedStorage.setItem(
      'user_session',
      JSON.stringify({
        userid: userid,
        token: token,
      }),
    )
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error in storing user session',
          text2: err,
        });
      });
  };

  const handleLogin = () => {
    axios
      .post(`${BASE_URL}/users/login`, {email, password})
      .then(res => {
        storeUserSession(res.data.id, 'token');
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Userid or password is incorrect',
          text2: err,
        });
      });
  };

  return (
    <View style={styles.login__mainCont}>
      <View style={styles.login__centerCont}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.login__postImage}
        />
        <View>
          <View style={styles.login__input}>
            <CustomTextReg>Email</CustomTextReg>
            <CustomInput
              icon1="mail-outline"
              placeholder="Email"
              value={email}
              setValue={setEmail}
              keyboardType="default"
            />
          </View>
          <View style={styles.login__input}>
            <CustomTextReg>Password</CustomTextReg>
            <CustomInput
              icon1="lock-closed-outline"
              placeholder="Password"
              password={true}
              value={password}
              setValue={setPassword}
              keyboardType="default"
            />
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(StackActions.push('ForgotPassword'))
              }>
              <CustomTextReg style={styles.login__forgotPassword}>
                Forgot Password?
              </CustomTextReg>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.login__button}
          activeOpacity={0.8}
          onPress={handleLogin}>
          <CustomTextReg>Log In</CustomTextReg>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.push('Signup'))}>
          <CustomTextReg style={styles.login__footer}>
            Don't have an account? Sign Up
          </CustomTextReg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login__mainCont: {
    backgroundColor: Colors.background,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  login__centerCont: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '70%',
    width: '90%',
    alignSelf: 'center',
  },
  login__postImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    alignSelf: 'center',
  },
  login__input: {
    marginTop: 20,
  },
  login__forgotPassword: {
    textAlign: 'right',
    marginTop: 5,
  },
  login__button: {
    backgroundColor: Colors.redColor,
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  login__footer: {
    textAlign: 'center',
  },
});
