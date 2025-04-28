import {StyleSheet, TextInput, View, Pressable} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import IconsIon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

type CustomInputPropType = PropsWithChildren<{
  icon1?: string;
  icon2?: string;
  placeholder: string;
  password?: boolean;
  editable?: boolean;
  autoFocus?: boolean;
  value: string;
  keyboardType: 'default' | 'number-pad' | 'numeric' | 'phone-pad';
  setValue: (value: string) => void;
  onPressIcon1?: () => void;
  onPressIcon2?: () => void;
}>;

const CustomInput = (props: CustomInputPropType) => {
  return (
    <View style={styles.customInput__mainCont}>
      {props.icon1 && (
        <Pressable onPress={props.onPressIcon1}>
          <IconsIon name={props.icon1} size={25} color={Colors.primaryText} />
        </Pressable>
      )}
      <TextInput
        style={styles.customInput__input}
        onChangeText={val => props.setValue(val)}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.password}
        editable={props.editable}
        autoFocus={props.autoFocus}
      />
      {props.icon2 && (
        <Pressable onPress={props.onPressIcon2}>
          <IconsIon name={props.icon2} size={20} color={Colors.primaryText} />
        </Pressable>
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
