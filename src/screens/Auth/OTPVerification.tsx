import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {CustomTextReg} from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import Colors from '../../constants/Colors';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../Types/Types';

const ForgotPassword = () => {
  const [OTP, setOTP] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
              value={OTP}
              setValue={setOTP}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.login__button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}>
          <CustomTextReg>Confirm OTP</CustomTextReg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

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
