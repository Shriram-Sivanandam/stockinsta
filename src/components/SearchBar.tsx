import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

import AntIcons from 'react-native-vector-icons/AntDesign';
import IconsIon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.searchBar__mainCont}>
      <AntIcons name="search1" size={20} color="#fff" />
      <TextInput
        style={styles.searchBar__input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Search and Add Instruments"
        keyboardType="default"
      />
      <IconsIon name="filter-outline" size={20} color="#fff" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar__mainCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    height: 45,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#4b4c4d',
    borderRadius: 5,
  },
  searchBar__input: {
    height: 45,
    width: '80%',
    paddingLeft: 10,
  },
});
