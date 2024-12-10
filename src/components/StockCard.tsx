import React from 'react';
import type {PropsWithChildren} from 'react';

import {StyleSheet, Text, View, Pressable} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

type StockCardPropType = PropsWithChildren<{
  stockName: string;
  stockCompany: string;
  stockIndex: string;
  stockPrice: string;
  stockChange: string;
  stockChangePercent: string;
}>;

const StockCard = ({
  navigation,
  stockCardProps,
}: {
  navigation: NavigationProp<any>;
  stockCardProps: StockCardPropType;
}) => {
  return (
    <Pressable
      style={styles.stockCard__mainCont}
      onPress={() => navigation.navigate('Home')}>
      <View>
        <Text style={styles.stockCard__stockName}>
          {stockCardProps.stockName}
        </Text>
        <Text style={styles.stockCard__stockCompany}>
          {stockCardProps.stockCompany}
        </Text>
      </View>
      <View style={styles.stockCard__rightCont}>
        <Text style={styles.stockCard__stockPrice}>
          {stockCardProps.stockPrice}
        </Text>
        <Text style={styles.stockCard__stockChangePos}>
          {stockCardProps.stockChange} ({stockCardProps.stockChangePercent})
        </Text>
      </View>
    </Pressable>
  );
};

export default StockCard;

const styles = StyleSheet.create({
  stockCard__mainCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
  stockCard__stockName: {
    color: 'white',
    fontSize: 15,
  },
  stockCard__stockCompany: {
    color: '#4b4c4d',
    fontSize: 14,
  },
  stockCard__rightCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  stockCard__stockPrice: {
    color: 'white',
    fontSize: 15,
  },
  stockCard__stockChangePos: {
    color: '#39a62b',
    fontSize: 14,
  },
  stockCard__stockChangeNeg: {
    color: '#37a329',
    fontSize: 14,
  },
});
