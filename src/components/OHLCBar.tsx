import {StyleSheet, View} from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';
import {CustomTextReg, CustomTextLight} from './CustomText';

const OHLCBar = () => {
  const low = 1637;
  const high = 1656.2;
  const open = 1639;
  const close = 1646.6;
  const perctStart = open > close ? close : open;
  const perctEnd = open > close ? open : close;
  return (
    <View>
      <CustomTextReg style={styles.OHLCBar__heading}>OHLC</CustomTextReg>
      <View style={styles.OHLCBar__splitHeadings}>
        <CustomTextLight style={styles.OHLCBar__highLowText}>
          Low
        </CustomTextLight>
        <CustomTextLight style={styles.OHLCBar__highLowText}>
          High
        </CustomTextLight>
      </View>
      <View style={styles.OHLCBar__totalBar}>
        <View
          style={[
            styles.OHLCBar__barLeft,
            {width: `${((perctStart - low) / (high - low)) * 100}%`},
          ]}
        />
        <View
          style={[
            styles.OHLCBar__bar,
            {width: `${((perctEnd - perctStart) / (high - low)) * 100}%`},
          ]}
        />
        <View
          style={[
            styles.OHLCBar__barRight,
            {width: `${((high - perctEnd) / (high - low)) * 100}%`},
          ]}
        />
      </View>
      <View style={styles.OHLCBar__splitHeadings}>
        <CustomTextLight>{low}</CustomTextLight>
        <CustomTextLight>{high}</CustomTextLight>
      </View>
      <View style={[styles.OHLCBar__splitHeadings, styles.OHLCBar__openClose]}>
        <CustomTextLight>
          <CustomTextLight style={styles.OHLCBar__highLowText}>
            Open{' '}
          </CustomTextLight>
          <CustomTextLight>{open}</CustomTextLight>
        </CustomTextLight>
        <CustomTextLight>
          <CustomTextLight style={styles.OHLCBar__highLowText}>
            Prev. Close{' '}
          </CustomTextLight>
          <CustomTextLight>{close}</CustomTextLight>
        </CustomTextLight>
      </View>
    </View>
  );
};

export default OHLCBar;

const styles = StyleSheet.create({
  OHLCBar__heading: {
    fontSize: 15,
    marginBottom: 10,
  },
  OHLCBar__splitHeadings: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  OHLCBar__highLowText: {
    color: Colors.secondaryText,
  },
  OHLCBar__barLeft: {
    height: 5,
    backgroundColor: Colors.secondaryBackground,
  },
  OHLCBar__totalBar: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  OHLCBar__bar: {
    height: 5,
    backgroundColor: Colors.redColor,
  },
  OHLCBar__barRight: {
    height: 5,
    backgroundColor: Colors.secondaryBackground,
  },
  OHLCBar__openClose: {
    marginTop: 15,
  },
});
