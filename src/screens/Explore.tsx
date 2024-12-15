import React, {Fragment, useRef} from 'react';

import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {StyleSheet, ScrollView, Pressable, View} from 'react-native';

import StockCard from '../components/StockCard';
import CustomBottomSheet from '../components/CustomBottomSheet';

const Explore = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  //   const snapToIndex = (index: number) =>
  //     bottomSheetRef.current?.snapToIndex(index);

  const handlePresentModalPress = () => bottomSheetRef.current?.present();

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
              <Pressable
                style={styles.explore__cardCont}
                onPress={handlePresentModalPress}>
                <StockCard stockCardProps={stockCard} />
              </Pressable>
            </Fragment>
          );
        })}
      </ScrollView>

      <CustomBottomSheet title="Helloooo!!!!!" ref={bottomSheetRef} />
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
    // flex: 1,
    // backgroundColor: 'grey',
  },
  contentContainer: {
    // flex: 1,
    // padding: 36,
    // alignItems: 'center',
  },
});
