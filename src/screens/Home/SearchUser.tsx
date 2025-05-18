import {StyleSheet, View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SearchUserCard from '../../components/SearchUserCard';
import {BASE_URL} from '../../frontend-api-service/Base';
import CustomInput from '../../components/CustomInput';
import Toast from 'react-native-toast-message';
import {UserCardPropType} from '../../Types/Types';

const SearchUser = () => {
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
        .get(`${BASE_URL}/users/searchUser?searchParam=${search}`)
        .then(res => {
          setSearchData(res.data);
        })
        .catch(err => {
          Toast.show({
            type: 'error',
            text1: 'Cannot find user',
            text2: err,
          });
        });
    }
  }, [search]);

  const onRefresh = () => {
    setRefreshing(true);
    axios
      .get(`${BASE_URL}/users/searchUser?searchParam=${search}`)
      .then(res => {
        setSearchData(res.data);
        setRefreshing(false);
      })
      .catch(err => {
        setRefreshing(false);
        Toast.show({
          type: 'error',
          text1: 'Cannot find user',
          text2: err,
        });
      });
  };

  return (
    <View style={styles.SearchStock__mainCont}>
      <View style={styles.SearchStock__searchBar}>
        <CustomInput
          icon1="search-outline"
          icon2="filter-outline"
          placeholder="Search Users"
          value={search}
          setValue={setSearch}
          keyboardType="default"
          autoFocus={true}
        />
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={searchData}
        renderItem={({item}: {item: UserCardPropType}) => (
          <SearchUserCard
            dp_path={item.dp_path}
            username={item.username}
            id={item.id}
          />
        )}
        keyExtractor={(item: UserCardPropType) => `${item.id}`}
      />
    </View>
  );
};

export default SearchUser;

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
