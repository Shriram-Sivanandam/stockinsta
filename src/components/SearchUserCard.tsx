import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {CustomTextReg} from './CustomText';
import {UserCardPropType} from '../Types/Types';
import Colors from '../constants/Colors';

const SearchUserCard = (userCardProps: UserCardPropType) => {
  return (
    <View style={styles.searchUserCard__logoContainer}>
      <Image
        source={{uri: userCardProps.dp_path}}
        style={styles.searchUserCard__logo}
      />
      <CustomTextReg style={styles.searchUserCard__userName}>
        {userCardProps.username}
      </CustomTextReg>
    </View>
  );
};

export default SearchUserCard;

const styles = StyleSheet.create({
  searchUserCard__logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  searchUserCard__logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.secondaryBackground,
  },
  searchUserCard__userName: {
    fontSize: 15,
  },
});
