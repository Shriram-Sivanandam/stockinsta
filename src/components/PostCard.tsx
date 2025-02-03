import React from 'react';
import type {PropsWithChildren} from 'react';

import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';

import {NavigationProp} from '@react-navigation/native';

import Colors from '../constants/Colors';
import {CustomTextReg} from './CustomText';

type PostCardPropType = PropsWithChildren<{
  userName: string;
  logoImage: string;
}>;

const PostCard = ({
  navigation,
  postCardProps,
}: {
  navigation: NavigationProp<any>;
  postCardProps: PostCardPropType;
}) => {
  return (
    <SafeAreaView>
      <View style={styles.postCard__mainContainer}>
        <View style={styles.postCard__titleContainer}>
          <View style={styles.postCard__logoContainer}>
            <Image
              source={{uri: postCardProps.logoImage}}
              style={styles.postCard__logo}
            />
            <CustomTextReg
              style={styles.postCard__userName}
              onPress={() => navigation.navigate('Explore')}>
              {postCardProps.userName}
            </CustomTextReg>
          </View>
          <Icons name="dots-three-vertical" size={15} color="white" />
        </View>
        <View>
          <Image
            source={{uri: postCardProps.logoImage}}
            style={styles.postCard__postImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postCard__mainContainer: {
    backgroundColor: Colors.background,
    width: '100%',
  },
  postCard__titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  postCard__logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postCard__logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.secondaryBackground,
  },
  postCard__userName: {
    fontSize: 15,
  },
  postCard__postImage: {
    width: '100%',
    height: 'auto',
    minHeight: 250,
    maxHeight: 400,
  },
});

export default PostCard;
