import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import axios from 'axios';

import {CustomTextReg, CustomTextLight} from '../components/CustomText';
import IconsIon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {BASE_URL} from '../frontend-api-service/Base/index';

type SearchStockCardPropType = {
  tradingsymbol: string;
  name: string;
  exchange: string;
  page: number;
};

const SearchStockCard = (props: SearchStockCardPropType) => {
  const userid = '1000040';
  const addInstrument = (tradingsymbol: string, exchange: string) => {
    axios
      .post(`${BASE_URL}/explore/addInstrument`, {
        userid,
        tradingsymbol,
        pageno: props.page,
        exchange,
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

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
      <Pressable
        onPress={() => addInstrument(props.tradingsymbol, props.exchange)}>
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
