import {
  View,
  FlatList,
  RefreshControl,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PostCard from '../../components/PostCard';

import {PostCardPropType} from '../../Types/Types';
import axios from 'axios';
import {BASE_URL} from '../../frontend-api-service/Base/index';
import {useSelector} from 'react-redux';
import {selectUserID} from '../../redux/userSlice';
import Toast from 'react-native-toast-message';
import CustomInput from '../../components/CustomInput';
import {useNavigation, StackActions} from '@react-navigation/native';

const Feed = () => {
  const [refreshing, setRefreshing] = useState(false);
  const userid = useSelector(selectUserID);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const onRefresh = () => {
    setRefreshing(true);
    axios
      .get(`${BASE_URL}/posts/getFeed?userid=${userid}`)
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
      .get(`${BASE_URL}/posts/getFeed?userid=${userid}`)
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

  return (
    <View style={styles.home__mainCont}>
      <Pressable
        style={styles.home__searchCont}
        onPress={() => navigation.dispatch(StackActions.push('SearchUser'))}>
        <CustomInput
          icon1="search-outline"
          icon2="filter-outline"
          placeholder="Search Users"
          value={search}
          setValue={setSearch}
          keyboardType="default"
          editable={false}
        />
      </Pressable>
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

const styles = StyleSheet.create({
  home__mainCont: {
    backgroundColor: 'black',
    flex: 1,
  },
  home__searchCont: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
});

export default Feed;
