import {StyleSheet, Text} from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';

export const CustomTextReg = (props: any) => {
  return (
    <Text {...props} style={[styles.customTextReg, props.style]}>
      {props.children}
    </Text>
  );
};

export const CustomTextLight = (props: any) => {
  return (
    <Text {...props} style={[styles.customTextLight, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  customTextReg: {
    fontFamily: 'Poppins Regular',
    color: Colors.primaryText,
  },
  customTextLight: {
    fontFamily: 'Poppins Light',
    color: Colors.primaryText,
  },
});
