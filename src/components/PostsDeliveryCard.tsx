import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomTextReg} from './CustomText';
import Colors from '../constants/Colors';

const PostsDeliveryCard = () => {
  const temp = {
    stockName: 'AAPL',
    entryPrice: '95',
    targetPrice: '100/110/120/130',
    stopLoss: '90',
  };
  return (
    <View style={styles.postsDelivery__mainContainer}>
      <View>
        <View style={styles.postsDelivery__infoContainer}>
          <CustomTextReg>EQUITY</CustomTextReg>
          <CustomTextReg>{temp.stockName}</CustomTextReg>
        </View>
        <View style={styles.postsDelivery__infoContainer}>
          <CustomTextReg>ENTRY PRICE</CustomTextReg>
          <CustomTextReg>{temp.entryPrice}</CustomTextReg>
        </View>
      </View>
      <View>
        <View style={styles.postsDelivery__infoContainer}>
          <CustomTextReg>SL</CustomTextReg>
          <CustomTextReg>{temp.stopLoss}</CustomTextReg>
        </View>
        <View style={styles.postsDelivery__infoContainer}>
          <CustomTextReg>TGT</CustomTextReg>
          <CustomTextReg>{temp.targetPrice}</CustomTextReg>
        </View>
      </View>
    </View>
  );
};

export default PostsDeliveryCard;

const styles = StyleSheet.create({
  postsDelivery__mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.secondaryBackground,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  postsDelivery__infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
});
