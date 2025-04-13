import React from 'react';

import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import IconsComm from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsIon from 'react-native-vector-icons/Ionicons';

import {NavigationProp} from '@react-navigation/native';
import {PostCardPropType} from '../Types/Types';

import Colors from '../constants/Colors';
import {CustomTextReg} from './CustomText';

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
        <View style={styles.postCard__iconsCont}>
          <View style={styles.postCard__likesCont}>
            {postCardProps.isLiked ? (
              <IconsIon
                name="arrow-up-circle-sharp"
                size={32}
                color={Colors.redColor}
              />
            ) : (
              <IconsIon
                name="arrow-up-circle-outline"
                size={32}
                color="white"
              />
            )}

            <CustomTextReg style={styles.postCard__iconsText}>
              {postCardProps.likes}
            </CustomTextReg>
          </View>
          <IconsComm name="comment-outline" size={28} color="white" />
          {postCardProps.isSaved ? (
            <IconsIon
              name="notifications"
              size={28}
              color={Colors.primaryText}
            />
          ) : (
            <IconsIon name="notifications-outline" size={28} color="white" />
          )}
        </View>
        <CustomTextReg style={styles.postCard__desc}>
          {postCardProps.userName} - {postCardProps.postDescription}
        </CustomTextReg>
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
  postCard__iconsCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    gap: 20,
  },
  postCard__likesCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  postCard__iconsText: {
    color: Colors.primaryText,
    fontSize: 18,
  },
  postCard__desc: {
    color: Colors.primaryText,
    fontSize: 15,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default PostCard;
