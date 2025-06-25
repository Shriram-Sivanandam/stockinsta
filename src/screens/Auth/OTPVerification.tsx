import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

import {CustomTextReg} from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import Colors from '../../constants/Colors';
import {BASE_URL} from '../../frontend-api-service/Base/index';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch} from 'react-redux';
import {setUserID} from '../../redux/userSlice';
import Toast from 'react-native-toast-message';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthRootStackParamList} from '../../Types/Types';

type Props = StackScreenProps<AuthRootStackParamList, 'OTPVerification'>;

const OTPVerification = ({route}: Props) => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const {email, username, password} = route.params;

  const storeUserSession = async (userid: string, token: string) => {
    EncryptedStorage.setItem(
      'user_session',
      JSON.stringify({
        userid: userid,
        token: token,
      }),
    )
      .then(() => {
        dispatch(setUserID(userid));
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error in storing user session',
          text2: err,
        });
      });
  };

  const handleSignUp = () => {
    if (otp.length !== 6) {
      Toast.show({
        type: 'error',
        text1: 'Invalid OTP',
      });
      return;
    }

    axios
      .post(`${BASE_URL}/users/verifyOTP`, {email, otp})
      .then(() => {
        axios
          .post(`${BASE_URL}/users/registerUser`, {email, password, username})
          .then(res => {
            storeUserSession(res.data.id, 'token');
          })
          .catch(err => {
            Toast.show({
              type: 'error',
              text1: 'User already exists',
              text2: err,
            });
          });
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Invalid OTP',
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
            <CustomTextReg>OTP</CustomTextReg>
            <CustomInput
              icon1="keypad-outline"
              placeholder="OTP"
              value={otp}
              setValue={setOtp}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.login__button}
          activeOpacity={0.8}
          onPress={() => handleSignUp()}>
          <CustomTextReg>Confirm OTP</CustomTextReg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPVerification;

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
