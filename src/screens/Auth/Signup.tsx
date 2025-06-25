import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

import {CustomTextReg} from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import Colors from '../../constants/Colors';
import {BASE_URL} from '../../frontend-api-service/Base/index';
import {useNavigation, StackActions} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
      });
      return;
    }
    axios
      .post(`${BASE_URL}/users/sendOTP`, {email})
      .then(() => {
        navigation.dispatch(
          StackActions.push('OTPVerification', {
            email: email,
            username: username,
            password: password,
          }),
        );
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'User already exists',
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
            <CustomTextReg>Username</CustomTextReg>
            <CustomInput
              icon1="mail-outline"
              placeholder="Username"
              value={username}
              setValue={setUsername}
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
          </View>
          <View style={styles.login__input}>
            <CustomTextReg>Confirm Password</CustomTextReg>
            <CustomInput
              icon1="lock-closed-outline"
              placeholder="Re-enter Password"
              password={true}
              value={confirmPassword}
              setValue={setConfirmPassword}
              keyboardType="default"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.login__button}
          activeOpacity={0.8}
          onPress={handleSignUp}>
          <CustomTextReg>Sign Up</CustomTextReg>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.push('Login'))}>
          <CustomTextReg style={styles.login__footer}>
            Already have an acount? Login
          </CustomTextReg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

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
