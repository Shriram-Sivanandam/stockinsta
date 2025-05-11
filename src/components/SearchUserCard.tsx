import {StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {CustomTextReg} from './CustomText';
import {UserCardPropType} from '../Types/Types';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {HomeRootStackParamList} from '../Types/Types';

const SearchUserCard = (userCardProps: UserCardPropType) => {
  const navigation = useNavigation<NavigationProp<HomeRootStackParamList>>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ProfilePage', {userid: userCardProps.id})
      }
      style={styles.searchUserCard__logoContainer}>
      <Image
        source={{uri: userCardProps.dp_path}}
        style={styles.searchUserCard__logo}
      />
      <CustomTextReg style={styles.searchUserCard__userName}>
        {userCardProps.username}
      </CustomTextReg>
    </Pressable>
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
