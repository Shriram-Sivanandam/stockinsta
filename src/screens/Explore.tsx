import React, {Fragment, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';

import {StyleSheet, ScrollView, Pressable, Text} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';

import StockCard from '../components/StockCard';

const Explore = ({navigation}: {navigation: NavigationProp<any>}) => {
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

  const [open, setOpen] = useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      drawerType="slide"
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.explore__mainCont}>
        {stockcardarr.map((stockCard, i) => {
          return (
            <Fragment key={i}>
              <Pressable
                style={styles.explore__cardCont}
                onPress={() => setOpen(prevOpen => !prevOpen)}>
                <StockCard stockCardProps={stockCard} />
              </Pressable>
            </Fragment>
          );
        })}
      </ScrollView>
    </Drawer>
  );
};

export default Explore;

const styles = StyleSheet.create({
  explore__mainCont: {
    backgroundColor: 'black',
  },
  explore__cardCont: {
    borderBottomWidth: 1,
    borderColor: '#4b4c4d',
  },
});
