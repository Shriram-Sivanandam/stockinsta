import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SearchStockCard from '../components/SearchStockCard';
import {BASE_URL} from '../frontend-api-service/Base';
import CustomInput from '../components/CustomInput';

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
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      setSearchData([]);
      return;
    } else if (search.length < 3) {
      return;
    } else {
      axios
        .get(`${BASE_URL}/explore/searchInstrument?searchParam=${search}`)
        .then(res => {
          setSearchData(res.data);
        });
    }
  }, [search]);

  const onRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing', BASE_URL);
    axios
      .get(`${BASE_URL}/explore/searchInstrument?searchParam=${search}`)
      .then(res => {
        setSearchData(res.data);
        setRefreshing(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.SearchStock__mainCont}>
      <View style={styles.SearchStock__searchBar}>
        <CustomInput
          icon1="search"
          icon2="filter-outline"
          placeholder="Search and Add Instruments"
          value={search}
          setValue={setSearch}
          keyboardType="default"
        />
      </View>
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
  SearchStock__searchBar: {
    marginTop: 30,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
});
