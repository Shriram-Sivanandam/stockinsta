import React, {Fragment, useRef} from 'react';
import type {PropsWithChildren} from 'react';

import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {Pressable, StyleSheet, Text, View} from 'react-native';
import CustomBottomSheet from '../components/CustomBottomSheet';

type StockCardPropType = PropsWithChildren<{
  stockName: string;
  stockCompany: string;
  stockIndex: string;
  stockPrice: string;
  stockChange: string;
  stockChangePercent: string;
}>;

const StockCard = ({stockCardProps}: {stockCardProps: StockCardPropType}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = () => bottomSheetRef.current?.present();
  return (
    <Fragment>
      <Pressable
        style={styles.stockCard__mainCont}
        onPress={handlePresentModalPress}>
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
      <CustomBottomSheet
        title={stockCardProps.stockName}
        ref={bottomSheetRef}
      />
    </Fragment>
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
    fontSize: 16,
    fontFamily: 'Poppins Regular',
  },
  stockCard__stockCompany: {
    color: '#4b4c4d',
    fontSize: 15,
    fontFamily: 'Poppins Light',
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
    color: '#ff0000',
    fontSize: 14,
  },
});
