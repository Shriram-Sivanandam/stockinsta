import {
  StyleSheet,
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../constants/Colors';
import {CustomTextReg, CustomTextLight} from '../components/CustomText';
import axios from 'axios';
import {BASE_URL} from '../frontend-api-service/Base';
import {useSelector} from 'react-redux';
import {selectUserID} from '../redux/userSlice';
import Toast from 'react-native-toast-message';
import {PostCardPropType} from '../Types/Types';
import PostCard from '../components/PostCard';

const ProfilePage = () => {
  const userid = useSelector(selectUserID);
  const [posts, setPosts] = useState<PostCardPropType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const temp = {
    username: 'John Doe',
    dp_path: 'https://reactjs.org/logo-og.png',
    bio: 'This is a sample bio',
    followers: 100,
    following: 50,
    posts: 10,
    isFollowing: false,
    isMe: false,
  };

  const onRefresh = () => {
    setRefreshing(true);
    axios
      .get(`${BASE_URL}/posts/getposts?userid=${userid}`)
      .then(res => {
        setPosts(res.data.posts);
        setRefreshing(false);
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error fetching posts',
          text2: err,
        });
        setRefreshing(false);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/getposts?userid=${userid}`)
      .then(res => {
        setPosts(res.data.posts);
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error fetching posts',
          text2: err,
        });
      });
  }, [userid]);

  const toggleFollow = () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <View style={styles.profilePage__background}>
      <View style={styles.profilePage__mainCont}>
        <View style={styles.profilePage__header}>
          <Image
            source={{uri: temp.dp_path}}
            style={styles.profilePage__avatar}
          />
          <View style={styles.profilePage__stats}>
            <View style={styles.profilePage__statItem}>
              <CustomTextReg>{temp.posts}</CustomTextReg>
              <CustomTextLight>Posts</CustomTextLight>
            </View>
            <View style={styles.profilePage__statItem}>
              <CustomTextReg>{temp.followers}</CustomTextReg>
              <CustomTextLight>Followers</CustomTextLight>
            </View>
            <View style={styles.profilePage__statItem}>
              <CustomTextReg>{temp.following}</CustomTextReg>
              <CustomTextLight>Following</CustomTextLight>
            </View>
          </View>
        </View>

        <View style={styles.profilePage__info}>
          <CustomTextReg style={styles.profilePage__username}>
            {temp.username}
          </CustomTextReg>
          <CustomTextReg>{temp.bio}</CustomTextReg>
        </View>

        <View style={styles.profilePage__actions}>
          <TouchableOpacity
            style={[
              styles.profilePage__actionButton,
              isFollowing
                ? {backgroundColor: Colors.redColor}
                : {backgroundColor: Colors.greenColor},
            ]}
            onPress={temp.isMe ? () => {} : toggleFollow}>
            <CustomTextReg style={{color: Colors.primaryText}}>
              {temp.isMe ? 'Edit Profile' : isFollowing ? 'Unfollow' : 'Follow'}
            </CustomTextReg>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={posts}
        renderItem={({item}: {item: PostCardPropType}) => (
          <PostCard postCardProps={item} setPosts={setPosts} />
        )}
        keyExtractor={(item: PostCardPropType) => item.entity_id.toString()}
      />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  profilePage__background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  profilePage__mainCont: {
    width: '90%',
    alignSelf: 'center',
  },
  profilePage__header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  profilePage__avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    borderWidth: 2,
    borderColor: Colors.borderColor,
  },
  profilePage__stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  profilePage__statItem: {
    alignItems: 'center',
  },
  profilePage__username: {
    marginBottom: 4,
  },
  profilePage__info: {
    marginBottom: 15,
  },
  profilePage__actions: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePage__actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});
