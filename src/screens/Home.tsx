import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import PostCard from '../components/PostCard';

import {NavigationProp} from '@react-navigation/native';
import {PostCardPropType} from '../Types/Types';
import axios from 'axios';
import {BASE_URL} from '../frontend-api-service/Base/index';
import {useSelector} from 'react-redux';
import {selectUserID} from '../redux/userSlice';
import Toast from 'react-native-toast-message';

const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [refreshing, setRefreshing] = useState(false);
  const userid = useSelector(selectUserID);
  const [posts, setPosts] = useState([]);

  const onRefresh = () => {
    setRefreshing(true);
    axios
      .get(`${BASE_URL}/posts/getposts?userid=${userid}`)
      .then(res => {
        setPosts(res.data.posts);
        console.log('helllasdflj', res.data.posts);
        setRefreshing(false);
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error fetching posts',
          text2: err,
        });
        console.log(err);
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

  return (
    <View style={styles.home__mainCont}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={posts}
        renderItem={({item}: {item: PostCardPropType}) => (
          <PostCard
            navigation={navigation}
            postCardProps={item}
            setPosts={setPosts}
          />
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
});

export default Home;
