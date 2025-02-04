import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import IconsIon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

type CustomInputPropType = PropsWithChildren<{
  icon1: string;
  icon2?: string;
  placeholder: string;
  password?: boolean;
  value: string;
  setValue: (value: string) => void;
}>;

const CustomInput = (props: CustomInputPropType) => {
  return (
    <View style={styles.customInput__mainCont}>
      <IconsIon name={props.icon1} size={20} color={Colors.primaryText} />
      <TextInput
        style={styles.customInput__input}
        onChangeText={val => props.setValue(val)}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType="default"
        secureTextEntry={props.password}
      />
      {props.icon2 && (
        <IconsIon name={props.icon2} size={20} color={Colors.primaryText} />
      )}
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
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 5,
  },
  customInput__input: {
    height: 45,
    width: '80%',
    color: Colors.primaryText,
  },
});
