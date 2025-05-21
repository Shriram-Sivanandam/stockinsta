import React, {useRef, useState} from 'react';

import {SafeAreaView, View, Image, StyleSheet, Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import IconsComm from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsIon from 'react-native-vector-icons/Ionicons';

import {PostCardPropType, CommentType} from '../Types/Types';

import Colors from '../constants/Colors';
import {CustomTextReg} from './CustomText';
import axios from 'axios';
import {BASE_URL} from '../frontend-api-service/Base';
import CommentsBottomSheet from './CommentsBottomSheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {selectUserID} from '../redux/userSlice';
import PostsDeliveryCard from '../components/PostsDeliveryCard';

const PostCard = ({
  postCardProps,
  setPosts,
}: {
  postCardProps: PostCardPropType;
  setPosts: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const userid = useSelector(selectUserID);

  const onCommentPress = () => {
    axios
      .get(`${BASE_URL}/posts/getcomments?entity_id=${postCardProps.entity_id}`)
      .then(res => {
        bottomSheetRef.current?.present();
        setComments(res.data.comments);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onLikePress = () => {
    const likeData = {
      userid: userid,
      entity_id: postCardProps.entity_id,
    };
    if (postCardProps.isLiked) {
      axios
        .post(`${BASE_URL}/posts/removelike`, likeData)
        .then(() => {
          setPosts((prevPosts: [PostCardPropType]) =>
            prevPosts.map((post: PostCardPropType) =>
              post.entity_id === postCardProps.entity_id
                ? {...post, likes: post.likes - 1, isLiked: false}
                : post,
            ),
          );
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      axios
        .post(`${BASE_URL}/posts/addlike`, likeData)
        .then(() => {
          setPosts((prevPosts: [PostCardPropType]) =>
            prevPosts.map((post: PostCardPropType) =>
              post.entity_id === postCardProps.entity_id
                ? {...post, likes: post.likes + 1, isLiked: true}
                : post,
            ),
          );
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.postCard__mainContainer}>
        <View style={styles.postCard__titleContainer}>
          <View style={styles.postCard__logoContainer}>
            <Image
              source={{uri: postCardProps.dp_path}}
              style={styles.postCard__logo}
            />
            <CustomTextReg style={styles.postCard__userName}>
              {postCardProps.username}
            </CustomTextReg>
          </View>
          <Icons name="dots-three-vertical" size={15} color="white" />
        </View>
        <View>
          <Image
            source={{uri: postCardProps.image_path}}
            style={styles.postCard__postImage}
          />
        </View>
        <View style={styles.postCard__iconsCont}>
          <View style={styles.postCard__likesCont}>
            <Pressable onPress={onLikePress}>
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
            </Pressable>

            <CustomTextReg style={styles.postCard__iconsText}>
              {postCardProps.likes}
            </CustomTextReg>
          </View>
          <Pressable onPress={onCommentPress}>
            <IconsComm name="comment-outline" size={28} color="white" />
          </Pressable>
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
        <PostsDeliveryCard />
        <CustomTextReg style={styles.postCard__desc}>
          {postCardProps.username} - {postCardProps.caption}
        </CustomTextReg>
      </View>
      <CommentsBottomSheet
        comments={comments}
        setComments={setComments}
        ref={bottomSheetRef}
        entity_id={postCardProps.entity_id}
      />
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
    marginBottom: 30,
  },
});

export default PostCard;
