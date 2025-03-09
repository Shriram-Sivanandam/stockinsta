import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SearchStockCard from '../components/SearchStockCard';
import {CustomTextReg} from '../components/CustomText';
import {BASE_URL} from '../frontend-api-service/Base';

type SearchStockPropType = {
  instrument_token: string;
  exchange_token: number;
  tradingsymbol: string;
  name: string;
  exchange: string;
};

const SearchStock = () => {
  const [searchData, setSearchData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/explore/searchInstrument?searchParam=tcs`)
      .then(res => {
        setSearchData(res.data);
      });
  });

  const onRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing', BASE_URL);
    axios
      .get(`${BASE_URL}/explore/searchInstrument?searchParam=tcs`)
      .then(res => {
        setSearchData(res.data);
        setRefreshing(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.SearchStock__mainCont}>
      <CustomTextReg>SearchStock</CustomTextReg>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={searchData}
        renderItem={({item}: {item: SearchStockPropType}) => (
          <SearchStockCard
            exchange={item.exchange}
            tradingsymbol={item.tradingsymbol}
            name={item.name}
          />
        )}
        keyExtractor={(item: SearchStockPropType) => item.instrument_token}
      />
    </View>
  );
};

export default SearchStock;

const styles = StyleSheet.create({
  SearchStock__mainCont: {
    backgroundColor: 'black',
    flex: 1,
  },
});
