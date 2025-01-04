import React, {Fragment} from 'react';

import {StyleSheet, ScrollView, View} from 'react-native';

import StockCard from '../components/StockCard';

const Explore = () => {
  const stockcardarr = [
    {
      stockName: 'AAPL',
      stockCompany: 'Apple Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '145.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: 'TSLA',
      stockCompany: 'Tesla Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '654.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: 'GOOGL',
      stockCompany: 'Alphabet Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '245.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: 'AMZN',
      stockCompany: 'Amazon Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '345.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
    {
      stockName: 'MSFT',
      stockCompany: 'Microsoft Inc.',
      stockIndex: 'NASDAQ',
      stockPrice: '445.86',
      stockChange: '+0.86',
      stockChangePercent: '+0.59%',
    },
  ];

  return (
    <View style={styles.explore__mainCont}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.explore__mainCont}>
        {stockcardarr.map((stockCard, i) => {
          return (
            <Fragment key={i}>
              <View style={styles.explore__cardCont}>
                <StockCard stockCardProps={stockCard} />
              </View>
            </Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explore__mainCont: {
    backgroundColor: 'black',
    flex: 1,
  },
  explore__cardCont: {
    borderBottomWidth: 1,
    borderColor: '#4b4c4d',
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
