import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OHLCBar = () => {
  const low = 1637;
  const high = 1656.2;
  const open = 1639;
  const close = 1646.6;
  const perctStart = open > close ? close : open;
  const perctEnd = open > close ? open : close;
  return (
    <View>
      <Text style={{color: '#fff'}}>Low</Text>
      <Text style={{color: '#fff'}}>High</Text>
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
      <Text style={{color: '#fff'}}>1,481.25</Text>
      <Text style={{color: '#fff'}}>1528.88</Text>
    </View>
  );
};

export default OHLCBar;

const styles = StyleSheet.create({
  OHLCBar__barLeft: {
    height: 5,
    backgroundColor: 'grey',
  },
  OHLCBar__totalBar: {
    display: 'flex',
    flexDirection: 'row',
  },
  OHLCBar__bar: {
    height: 5,
    backgroundColor: 'red',
  },
  OHLCBar__barRight: {
    height: 5,
    backgroundColor: 'grey',
  },
});
