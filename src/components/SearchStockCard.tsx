import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';

import {CustomTextReg, CustomTextLight} from '../components/CustomText';
import IconsIon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

type SearchStockCardPropType = {
  tradingsymbol: string;
  name: string;
  exchange: string;
};

const SearchStockCard = (props: SearchStockCardPropType) => {
  return (
    <View style={styles.SearchStockCard__mainCont}>
      <View style={styles.SearchStockCard__leftCont}>
        <View style={styles.SearchStockCard__exchangeCont}>
          <CustomTextReg>{props.exchange}</CustomTextReg>
        </View>
        <View>
          <CustomTextReg>{props.tradingsymbol}</CustomTextReg>
          <CustomTextLight style={styles.SearchStockCard_nameText}>
            {props.name}
          </CustomTextLight>
        </View>
      </View>
      <Pressable>
        <IconsIon
          name="add-circle-outline"
          size={30}
          color={Colors.primaryText}
        />
      </Pressable>
    </View>
  );
};

export default SearchStockCard;

const styles = StyleSheet.create({
  SearchStockCard__mainCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    margin: 10,
  },
  SearchStockCard__leftCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchStockCard__exchangeCont: {
    backgroundColor: Colors.secondaryBackground,
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  SearchStockCard_nameText: {
    color: Colors.secondaryBackground,
  },
});
