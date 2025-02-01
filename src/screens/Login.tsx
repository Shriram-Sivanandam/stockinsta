import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {CustomTextReg} from '../components/CustomText';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <View style={styles.login__mainCont}>
      <View style={styles.login__centerCont}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.login__postImage}
        />
        <View>
          <View style={styles.login__input}>
            <CustomTextReg style={styles.login__inputLabel}>
              Email
            </CustomTextReg>
            <CustomInput icon1="mail-outline" placeholder="Username" />
          </View>
          <View style={styles.login__input}>
            <CustomTextReg style={styles.login__inputLabel}>
              Password
            </CustomTextReg>
            <CustomInput
              icon1="lock-closed-outline"
              placeholder="Password"
              password={true}
            />
            <CustomTextReg style={styles.login__forgotPassword}>
              Forgot Password?
            </CustomTextReg>
          </View>
        </View>
        <TouchableOpacity style={styles.login__button} activeOpacity={0.8}>
          <CustomTextReg>Log In</CustomTextReg>
        </TouchableOpacity>
        <CustomTextReg style={styles.login__footer}>
          Don't have an account? Sign Up
        </CustomTextReg>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login__mainCont: {
    backgroundColor: '#000',
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
  login__inputLabel: {
    color: '#fff',
  },
  login__forgotPassword: {
    textAlign: 'right',
    marginTop: 5,
  },
  login__button: {
    backgroundColor: '#bd0413',
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
