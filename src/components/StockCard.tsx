import React, {Fragment, useRef} from 'react';
import type {PropsWithChildren} from 'react';

import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {Pressable, StyleSheet, View} from 'react-native';
import CustomBottomSheet from '../components/CustomBottomSheet';
import {CustomTextReg, CustomTextLight} from '../components/CustomText';
import Colors from '../constants/Colors';

type StockCardPropType = PropsWithChildren<{
  tradingsymbol: string;
  name: string;
  exchange: string;
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
          <CustomTextReg style={styles.stockCard__stockName}>
            {stockCardProps.tradingsymbol}
          </CustomTextReg>
          <CustomTextLight style={styles.stockCard__stockCompany}>
            {stockCardProps.name} ({stockCardProps.exchange})
          </CustomTextLight>
        </View>
        <View style={styles.stockCard__rightCont}>
          <CustomTextReg style={styles.stockCard__stockPrice}>
            {stockCardProps.stockPrice}
          </CustomTextReg>
          <CustomTextLight style={styles.stockCard__stockChangePos}>
            {stockCardProps.stockChange} ({stockCardProps.stockChangePercent})
          </CustomTextLight>
        </View>
      </Pressable>
      <CustomBottomSheet
        title={stockCardProps.tradingsymbol}
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
    fontSize: 16,
  },
  stockCard__stockCompany: {
    color: Colors.secondaryText,
    fontSize: 15,
  },
  stockCard__rightCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  stockCard__stockPrice: {
    fontSize: 15,
  },
  stockCard__stockChangePos: {
    color: Colors.greenColor,
    fontSize: 14,
  },
  stockCard__stockChangeNeg: {
    color: Colors.redColor,
    fontSize: 14,
  },
});
