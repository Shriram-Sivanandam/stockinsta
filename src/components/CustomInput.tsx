import {StyleSheet, TextInput, View, Pressable} from 'react-native';
import React, {memo, useCallback} from 'react';
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
  mainContStyles?: any;
}>;

const CustomInput = (props: CustomInputPropType) => {
  const {setValue} = props;
  const onTextChange = useCallback(
    (text: string) => {
      setValue(text); // or your actual handler
    },
    [setValue],
  );

  return (
    <View style={[styles.customInput__mainCont, props.mainContStyles]}>
      {props.icon1 && (
        <Pressable onPress={props.onPressIcon1}>
          <IconsIon name={props.icon1} size={25} color={Colors.primaryText} />
        </Pressable>
      )}
      <TextInput
        style={styles.customInput__input}
        onChangeText={onTextChange}
        defaultValue={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.password}
        editable={props.editable}
        autoFocus={props.autoFocus}
        autoCapitalize="none"
      />
      {props.icon2 && (
        <Pressable onPress={props.onPressIcon2}>
          <IconsIon name={props.icon2} size={20} color={Colors.primaryText} />
        </Pressable>
      )}
    </View>
  );
};

export default memo(CustomInput);

const styles = StyleSheet.create({
  customInput__mainCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: 10,
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 5,
  },
  customInput__input: {
    height: 45,
    flex: 1,
    color: Colors.primaryText,
    paddingLeft: 10,
  },
});
