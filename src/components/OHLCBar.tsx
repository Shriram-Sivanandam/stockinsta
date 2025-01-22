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
      <Text style={styles.OHLCBar__heading}>OHLC</Text>
      <View style={styles.OHLCBar__splitHeadings}>
        <Text style={styles.OHLCBar__highLowText}>Low</Text>
        <Text style={styles.OHLCBar__highLowText}>High</Text>
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
        <Text style={styles.OHLCBar__highLowNumText}>{low}</Text>
        <Text style={styles.OHLCBar__highLowNumText}>{high}</Text>
      </View>
      <View style={[styles.OHLCBar__splitHeadings, styles.OHLCBar__openClose]}>
        <Text>
          <Text style={styles.OHLCBar__highLowText}>Open </Text>
          <Text style={styles.OHLCBar__highLowNumText}>{open}</Text>
        </Text>
        <Text>
          <Text style={styles.OHLCBar__highLowText}>Prev. Close </Text>
          <Text style={styles.OHLCBar__highLowNumText}>{close}</Text>
        </Text>
      </View>
    </View>
  );
};

export default OHLCBar;

const styles = StyleSheet.create({
  OHLCBar__heading: {
    color: '#fff',
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
    color: '#9e9b9b',
  },
  OHLCBar__barLeft: {
    height: 5,
    backgroundColor: '#4b4c4d',
  },
  OHLCBar__totalBar: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  OHLCBar__bar: {
    height: 5,
    backgroundColor: '#ff0000',
  },
  OHLCBar__barRight: {
    height: 5,
    backgroundColor: '#4b4c4d',
  },
  OHLCBar__highLowNumText: {
    color: '#fff',
  },
  OHLCBar__openClose: {
    marginTop: 15,
  },
});
