import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import IconsIon from 'react-native-vector-icons/Ionicons';

type CustomInputPropType = PropsWithChildren<{
  icon1: string;
  icon2?: string;
  placeholder: string;
  password?: boolean;
}>;

const CustomInput = (props: CustomInputPropType) => {
  return (
    <View style={styles.customInput__mainCont}>
      <IconsIon name={props.icon1} size={20} color="#fff" />
      <TextInput
        style={styles.customInput__input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder={props.placeholder}
        keyboardType="default"
        secureTextEntry={props.password}
      />
      {props.icon2 && <IconsIon name={props.icon2} size={20} color="#fff" />}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  customInput__mainCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    padding: 10,
    backgroundColor: '#4b4c4d',
    borderRadius: 5,
  },
  customInput__input: {
    height: 45,
    width: '80%',
  },
});
